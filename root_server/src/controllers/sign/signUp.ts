import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';

import { SIGNUP_QUERY } from '@queries/sign';
import { getSaltedPassword } from '@crypto/satl';

export type ISignUpBody = {
    name: string
    password: string
    email: string
    role: number
}

export default async function signUpController(req: Request<any, any, ISignUpBody>, res: Response) {
    const { body: { name, password, email, role } } = req;
    const userId: string = uuidv4();

    try {
        await SIGNUP_QUERY({ userId, name, password: getSaltedPassword(password), email, role });

        res.redirect(307, `/api/auth/signup?userId=${userId}`);
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
