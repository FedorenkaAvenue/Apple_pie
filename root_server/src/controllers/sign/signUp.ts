import { Request, Response } from "express";

import { SIGNUP_QUERY } from '@queries/sign';
import { getSaltedPassword } from '@crypto/satl';
import generateId from '@utils/generateId';

export type ISignUpBody = {
    name: string
    password: string
    email: string
    role: number
}

export default async function signUpController(req: Request<any, any, ISignUpBody>, res: Response) {
    const { body: { name, password, email, role } } = req;
    const id: string = generateId();

    try {
        await SIGNUP_QUERY({ id, name, password: getSaltedPassword(password), email, role });

        res.redirect(307, `/api/auth/signup?id=${id}`);
    } catch({ code, constraint, message }) {
        console.log(message);

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
