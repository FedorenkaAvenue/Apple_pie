import { NextFunction, Request, Response } from 'express';

import { validateToken } from '@crypto/jwt';
import { clearRefreshToken } from '@crypto/cookie';
import { DELETE_SESSION } from '@db/redis/queries/sessions';
import { IRefreshTOkenPayload } from '@interfaces/Token';

const { COOKIE_REFRESH_TOKEN_NAME } = process.env;

export default async function({ cookies }: Request, res: Response, next: NextFunction) {
    try {
        const currentRefreshToken: string = cookies[COOKIE_REFRESH_TOKEN_NAME as string];

        if (!currentRefreshToken) throw new Error('refresh token not found');

        const { sessionKey } = validateToken(currentRefreshToken) as IRefreshTOkenPayload;

        clearRefreshToken.call(res).sendStatus(200);

        try {
            DELETE_SESSION(sessionKey);
        } catch(err) {
            next(err);
        }
    } catch(err) {
        res.sendStatus(406);
    }
}
