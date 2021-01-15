import { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import googleAuth from '@crypto/googleAuth';
import { CREATE_USER_QUERY } from '@db/postgres/queries/user';
import { setRefreshToken } from '@crypto/cookie';
import createSession from '@servises/sessions/createSession';
import ACCOUNT_TYPE from '../../../constants/accountTypes'; // ! проверить ШО ЗА ХУЙНЯ с алиасом @constants

export default async function(req: Request, res: Response, next: NextFunction) {
    const { body: { credentials, name, role }, ip } = req;
    const userId: string = uuidv4();

    try {
        if (!credentials || !role) throw new Error();

        const { name: googleName, email, picture: photo } = await googleAuth(credentials);

        try {
            try {
                await CREATE_USER_QUERY({
                    id: userId,
                    acc_type: ACCOUNT_TYPE.GOOGLE,
                    name: name || googleName,
                    created_at: Date.now(),
                    email, role, photo
                });
            } catch(err) {
                const { code, constraint } = err;

                switch(code) {
                    case '23505': // существующее уникальное поле
                        return res.status(409).json({ field: constraint });
                    case '22001': // неверный формат данных
                        return res.status(406).json({ field: constraint });
                    default:
                        next(err);
                }
            }

            const { accessToken, refreshToken } = await createSession({
                ua: req.get('User-Agent') as string,
                verify: true,
                userId, role, ip
            });

            setRefreshToken.call(res, refreshToken).status(201).send({ accessToken });
        } catch(err) {
            next(err);
        }
    } catch(err) {
        res.sendStatus(400);
    }
}
