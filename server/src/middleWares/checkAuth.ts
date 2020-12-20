import { Request, Response, NextFunction } from 'express';

import { validateToken } from '@crypto/jwt';
import { IAccessTokenPayload } from '@interfaces/IToken';

export default function(req: Request, res: Response, next: NextFunction): void {
    try {
        const accessToken = req.headers.authorization?.split(' ')[1];

        if (!accessToken) throw new Error();

        const userPayload = validateToken(accessToken) as IAccessTokenPayload;

        res.locals.userTokenPayload = userPayload;
        next();
    } catch(err) {
        res.sendStatus(401);
    }
}
