import { Request, Response, NextFunction } from 'express';

import { validateToken } from '@crypto/jwt';
import { IAccessTokenPayload } from '@interfaces/Token';

export default function(req: Request, res: Response, next: NextFunction) {
    try {
        const accessToken = req.headers.authorization?.split(' ')[1];

        if (!accessToken) throw Error;

        const userPayload = validateToken(accessToken) as IAccessTokenPayload;

        if (!userPayload.verify) return res.sendStatus(418);

        res.locals.userTokenPayload = userPayload;
        next();
    } catch(err) {
        res.sendStatus(401);
    }
}
