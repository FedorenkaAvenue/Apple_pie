import { NextFunction, Request, Response } from 'express';

import { CREATE_USER_QUERY } from '@db/postgres/queries/user';
import { setRefreshToken } from '@crypto/cookie';
import createSession from '@servises/sessions/createSession';
import facebookAuth from '@crypto/facebookAuth';
import ACCOUNT_TYPE from '../../../constants/accountTypes'; // ! проверить ШО ЗА ХУЙНЯ с алиасом @constants

export default async function(req: Request, res: Response, next: NextFunction) {
    const { body: { credentials, name, role }, ip } = req;

    try {
        if (!credentials || !role) throw new Error();

        const { facebookName, email, photo, id } = await facebookAuth(credentials);
       
        try {
            try {
                await CREATE_USER_QUERY({
                    acc_type: ACCOUNT_TYPE.FACEBOOK,
                    name: name || facebookName,
                    created_at: Date.now(),
                    email, role, photo, id
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
                userId: id,
                role, ip
            });

            setRefreshToken.call(res, refreshToken).status(201).send({ accessToken });
        } catch(err) {
            next(err);
        }
    } catch(err) {
        res.sendStatus(400);
    }
}
