import { NextFunction, Request, Response } from 'express';

import { SIGN_IN_EMAIL_QUERY } from '@db/postgres/queries/sign';
import { getSaltedPassword } from '@crypto/satl';
import createSession from '@servises/sessions/createSession';
import { setRefreshToken } from '@crypto/cookie';
import IUser from '@interfaces/User';

export default async function(req: Request<any, any, IUser>, res: Response, next: NextFunction) {
    try {
        const { body: { email, password }, ip } = req;
        const saltedPassword = getSaltedPassword(password as string);

        if (!email && !password) throw new Error();

        try {
            const { rows, rowCount } = await SIGN_IN_EMAIL_QUERY(email, saltedPassword);

            if (!rowCount) throw new Error();

            const { id: userId, role, verify } = rows[0];
            
            try {
                const { accessToken, refreshToken } = await createSession({
                    userId, role, ip, verify,
                    ua: req.get('User-Agent') as string
                });

                setRefreshToken.call(res, refreshToken).status(200).send({ accessToken });
            } catch(err) {
                next(err);
            }
        } catch(err) {
            res.sendStatus(403);
        }
    } catch(err) {
        res.sendStatus(400);
    }
}