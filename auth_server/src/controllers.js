import { v4 as uuidv4 } from 'uuid';

import { generateTokenPair, validateToken } from './jwt.js';
import { createSession } from './db.js';
import { setRefreshToken } from './cookie.js';

export async function signUp(req, res) {
    try {
        const { body: { role }, query: { id }, ip } = req;
        const sessionKey = uuidv4();
        const { accessToken, refreshToken } = generateTokenPair({ id, role, sessionKey });
        //TODO: подумать на счет синхронизации сохранения сессий и юзера в БД

        await createSession({ sessionKey, id, refreshToken, ip, ua: req.get('User-Agent') });
        setRefreshToken.call(res, refreshToken).status(201).send({ accessToken });
    } catch(err) {
        console.log(err);

        res.sendStatus(501);
    }
}

export async function refreshToken(req, res) {
    try {
        const currentRefreshToken = req.cookies['refresh_token'];

        if (!currentRefreshToken) throw new Error(403);

        const { id } = validateToken(currentRefreshToken);
        const { accessToken, refreshToken } = generateTokenPair({ id, role });
        
        setRefreshToken.call(res, refreshToken).status(201).send({ accessToken });
    } catch(err) {
        console.log(err);

        if (err.message === 418) {
            //TODO сделать бан по взлому
            return res.sendStatus(418);
        }

        res.sendStatus(403);
    }
}
