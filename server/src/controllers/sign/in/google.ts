import { NextFunction, Request, Response } from 'express';

import { SIGN_IN_GOOGLE_QUERY } from '@db/postgres/queries/sign';
import googleAuth from '@crypto/googleAuth';
import createSession from '@servises/sessions/createSession';
import { setRefreshToken } from '@crypto/cookie';

export default async function(req: Request, res: Response, next: NextFunction) {
    const { body: { credentials }, ip } = req;

    try {
        if (!credentials) throw new Error();

        const { email } = await googleAuth(credentials);

        try {
            const { rows, rowCount } = await SIGN_IN_GOOGLE_QUERY(email);

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
