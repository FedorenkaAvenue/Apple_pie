import { NextFunction, Request, Response } from 'express';

import { validateToken } from '@crypto/jwt';
import { setRefreshToken } from '@crypto/cookie';
import refreshSession from '@servises/sessions/refreshSession';
import { IRefreshTOkenPayload } from '@interfaces/IToken';

const { COOKIE_REFRESH_TOKEN_NAME } = process.env;

export default async function(req: Request, res: Response, next: NextFunction) {
    try {
        const currentRefreshToken: string = req.cookies[COOKIE_REFRESH_TOKEN_NAME as string];

        if (!currentRefreshToken) throw new Error();

        const { sessionKey, role } = validateToken(currentRefreshToken) as IRefreshTOkenPayload;
        const { accessToken, refreshToken } = await refreshSession(currentRefreshToken, sessionKey, role);

        setRefreshToken.call(res, refreshToken).status(201).send({ accessToken });
    } catch(err) {
        switch(err.message) {
            case '501':
                return next(err);
            case '418':
                return res.sendStatus(418); //TODO: сделать бан
            default:
                return res.sendStatus(406);
        }
    }
}
