import { NextFunction, Request, Response } from 'express';

import { validateToken } from '@crypto/jwt';
import { setRefreshToken } from '@crypto/cookie';
import refreshSession from '@servises/sessions/refreshSession';
import { IRefreshTOkenPayload } from '@interfaces/Token';

const { COOKIE_REFRESH_TOKEN_NAME } = process.env;

export default async function({ cookies }: Request, res: Response, next: NextFunction) {
    try {
        const currentRefreshToken: string = cookies[COOKIE_REFRESH_TOKEN_NAME as string];

        if (!currentRefreshToken) throw Error;

        const { sessionKey } = validateToken(currentRefreshToken) as IRefreshTOkenPayload;
        const { accessToken, refreshToken } = await refreshSession(currentRefreshToken, sessionKey);

        setRefreshToken.call(res, refreshToken).status(201).send({ accessToken });
    } catch(err) {
        switch(err.message) {
            case '501':
                return next(err);
            case '451':
                return res.sendStatus(406); //TODO: сделать бан
            default:
                return res.sendStatus(406);
        }
    }
}
