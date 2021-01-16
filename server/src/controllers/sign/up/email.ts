import { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { CREATE_USER_QUERY } from '@db/postgres/queries/user';
import createSession from '@servises/sessions/createSession';
import verifyEmail from '@servises/email/verifyEmail';
import { setRefreshToken } from '@crypto/cookie';
import { getSaltedPassword } from '@crypto/satl';
import IUser from '@interfaces/User';
import ACCOUNT_TYPE from '../../../constants/accountTypes'; // ! проверить ШО ЗА ХУЙНЯ с алиасом @constants

export default async function signUpController(req: Request<any, any, IUser>, res: Response, next: NextFunction) {
    const { body: { password, email, role, name }, ip } = req;
    const userId: string = uuidv4();

    try {
        if (!password || !email || !role || !name) throw new Error();

        try {
            try {
                await CREATE_USER_QUERY({
                    id: userId,
                    acc_type: ACCOUNT_TYPE.EMAIL,
                    password: getSaltedPassword(password),
                    created_at: Date.now(),
                    verify: false,
                    email, role, name
                });
            } catch(err) {
                const { code, constraint } = err;

                switch(code) {
                    case '23505': // существующее уникальное поле
                        return res.status(409).json({ field: constraint });
                    default:
                        return next(err.messagae);
                }
            }

            const { accessToken, refreshToken } = await createSession({
                ua: req.get('User-Agent') as string,
                verify: false,
                userId, role, ip
            });

            setRefreshToken.call(res, refreshToken).status(201).send({ accessToken });
            verifyEmail(userId, email);
        } catch(err) {
            next(err);
        }
    } catch(err) {
        res.sendStatus(400);
    }
};
