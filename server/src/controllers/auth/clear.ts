import { NextFunction, Request, Response } from 'express';

import { validateToken } from '@crypto/jwt';
import { clearRefreshToken } from '@crypto/cookie';
import deleteSession from '@servises/sessions/deleteSession';
import { IRefreshTOkenPayload } from '@interfaces/IToken';

const { COOKIE_REFRESH_TOKEN_NAME } = process.env;

export default async function(req: Request, res: Response, next: NextFunction) {
    try {
        const currentRefreshToken: string = req.cookies[COOKIE_REFRESH_TOKEN_NAME as string];

        if (!currentRefreshToken) throw new Error('refresh token not found');

        const { sessionKey } = validateToken(currentRefreshToken) as IRefreshTOkenPayload;

        clearRefreshToken.call(res).sendStatus(200);
        try {
            deleteSession(sessionKey);
        } catch(err) {
            next(err);
        }
    } catch(err) {
        res.sendStatus(406);
    }
}
