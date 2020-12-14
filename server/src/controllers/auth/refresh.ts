import { Request, Response } from 'express';

import { validateToken } from '@crypto/jwt';
import { setRefreshToken } from '@crypto/cookie';
import { IRefreshTOkenPayload } from '@interfaces/IToken';
import refreshSession from '@servises/sessions/refreshSession';

export default async function(req: Request, res: Response) {
    try {
        const currentRefreshToken: string = req.cookies['refresh_token'];

        if (!currentRefreshToken) throw new Error();

        const { sessionKey, role } = validateToken(currentRefreshToken) as IRefreshTOkenPayload;
        const { accessToken, refreshToken } = await refreshSession(currentRefreshToken, sessionKey, role);

        setRefreshToken.call(res, refreshToken).status(201).send({ accessToken });
    } catch(err) {
        console.log(err);

        switch(err.message) {
            case '501':
                return res.sendStatus(501);
            case '418':
                return res.sendStatus(418); //TODO: сделать бан
            default:
                return res.sendStatus(406);
        }
    }
}
