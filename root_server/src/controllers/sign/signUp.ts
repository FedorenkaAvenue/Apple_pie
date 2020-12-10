import { Request, Response } from "express";

import { SIGNUP_QUERY } from '@src/queries/sign';
import { getSaltedPassword } from '@crypto/satl';
import authSignUp from '@servises/auth/signUp';
import { setRefreshToken } from '@servises/cookie';
import generateId from '@utils/generateId';

import { ITokenPair } from '@interfaces/IToken';

export type ISignUpBody = {
    name: string
    password: string
    email: string
    role: number
}

export default async function signUpController(req: Request<any, any, ISignUpBody>, res: Response) {
    const { body: { name, password, email, role }, ip } = req;
    const id = generateId();

    try {
        await SIGNUP_QUERY({ id, name, password: getSaltedPassword(password), email, role });
        const { accessToken, refreshToken }: ITokenPair = await authSignUp({
            id, role, ip,
            ua: req.get('User-Agent') as string
        });
        setRefreshToken.call(res, refreshToken).status(201).send({ accessToken });
    } catch({ code, constraint }) {
        switch(code) {
            case '23505': // существующее уникальное поле
                return res.status(409).json({ field: constraint });
            case '22001': // неверный формат данных
                return res.status(406).json({ field: constraint });
            default:
                return res.sendStatus(501);
        }
    }
};
