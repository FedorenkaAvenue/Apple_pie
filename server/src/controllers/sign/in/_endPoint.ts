import { NextFunction, Request, Response } from 'express';

import createSession from '@servises/sessions/createSession';
import { setRefreshToken } from '@crypto/cookie';

export default async function(req: Request, res: Response, next: NextFunction) {
    const { ip } = req;
    const { userId, role, verify } = res.locals;

    try {
        const { accessToken, refreshToken } = await createSession({
            userId, role, ip, verify,
            ua: req.get('User-Agent') as string
        });

        setRefreshToken.call(res, refreshToken).status(200).send({ accessToken });
    } catch(err) {
        next(err);
    }
}
