import { Request, Response } from "express";

import { SIGNUP_QUERY } from '@queries/auth';
import { getSaltedPassword } from '@crypto/satl';
import { getPairToken } from '@servises/auth';
import { setRefreshToken } from '@servises/cookie';
import generateId from '@utils/generateId';

import { ISignUpBody } from '@interfaces/requests';

export default async function signUpController(req: Request<any, any, ISignUpBody>, res: Response) {
    const { body: { name, password, email, role } } = req;
    const id = generateId();

    try {
        await SIGNUP_QUERY({ id, name, password: getSaltedPassword(password), email, role });
        const { accessToken, refreshToken } = await getPairToken(id, role);
        setRefreshToken.call(res, refreshToken).status(201).send({ accessToken });
    } catch({ code, constraint }) {
        switch(code) {
            case '23505': // существующее уникальное поле
                return res.status(409).json({ existed: constraint });
            case '22001': // неверный формат данных
                return res.status(406).json({ invalidField: constraint });
            default:
                return res.sendStatus(500);
        }
    }
};
