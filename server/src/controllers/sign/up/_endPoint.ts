import { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { CREATE_USER_QUERY } from '@db/postgres/queries/user';
import { setRefreshToken } from '@crypto/cookie';
import createSession from '@servises/sessions/createSession';
import ACCOUNT_TYPE from '@constants/accountTypes';
import verifyEmail from '@servises/email/verifyEmail';
import { getSaltedPassword } from '@crypto/satl';
import IUser from '@interfaces/User';

export default async function(req: Request<any, any, IUser>, res: Response, next: NextFunction) {
    const { ip } = req;
    const userId: string = uuidv4();
    const { accountType, password, email, role, name, photo, id } = res.locals;
    const isEmailController = accountType === ACCOUNT_TYPE.EMAIL;

    try {
        try {
            await CREATE_USER_QUERY({
                id: userId,
                open_id: id,
                acc_type: accountType,
                password: password && getSaltedPassword(password),
                created_at: Date.now(),
                verify: !isEmailController,
                email, role, name, photo
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
            verify: !isEmailController,
            userId, role, ip
        });

        setRefreshToken.call(res, refreshToken).status(201).send({ accessToken });

        if (isEmailController) verifyEmail(userId, email);
    } catch(err) {
        next(err);
    }
}
