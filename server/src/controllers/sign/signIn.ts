import { NextFunction, Request, Response } from 'express';

import { LOGIN_QUERY } from '@db/postgres/queries/sign';
import { getSaltedPassword } from '@crypto/satl';
import createSession from '@servises/sessions/createSession';
import { setRefreshToken } from '@crypto/cookie';
import { IUserSchema } from '@interfaces/DB';

export default async function(req: Request<any, any, IUserSchema>, res: Response, next: NextFunction) {
    try {
        const { body: { email, password }, ip } = req;
        const saltedPassword = getSaltedPassword(password);

        if (!email && !password) throw new Error();

        try {
            const { rows, rowCount } = await LOGIN_QUERY(email, saltedPassword);

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
            res.sendStatus(406);
        }
    } catch(err) {
        res.sendStatus(400);
    }
}
