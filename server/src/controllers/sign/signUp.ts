import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { CREATE_USER_QUERY, DELETE_USER_QUERY } from '@db/postgres/queries/user';
import { getSaltedPassword } from '@crypto/satl';
import createSession from '@servises/sessions/createSession';
import { setRefreshToken } from '@crypto/cookie';

type ISignUpBody = {
    name: string
    password: string
    email: string
    role: number
}

export default async function signUpController(req: Request<any, any, ISignUpBody>, res: Response) {
    const { body: { name, password, email, role }, ip } = req;
    const userId: string = uuidv4();

    try {
        try {
            await CREATE_USER_QUERY({ userId, name, password: getSaltedPassword(password), email, role });
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

        const { accessToken, refreshToken } = await createSession({
            userId, role, ip,
            ua: req.get('User-Agent') as string
        });

        setRefreshToken.call(res, refreshToken).status(201).send({ accessToken });
    } catch({ code, constraint, message }) {
        console.log(message);

        DELETE_USER_QUERY(userId); // ? удаляем юзера, если сессия не сохранилась
        res.sendStatus(501);
    }
};
