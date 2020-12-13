import { v4 as uuidv4 } from 'uuid';

import { generateTokenPair, validateToken } from './jwt.js';
import { createSession, findSession, deleteSession } from './db.js';
import { setRefreshToken } from './cookie.js';

export async function signUp(req, res) {
    try {
        const { body: { role }, query: { userId }, ip } = req;
        const sessionKey = uuidv4();
        const { accessToken, refreshToken } = generateTokenPair({ userId, role, sessionKey });

        await createSession({ sessionKey, userId, refreshToken, ip, ua: req.get('User-Agent') });
        setRefreshToken.call(res, refreshToken).status(201).send({ accessToken });
    } catch(err) {
        console.err(err);

        res.sendStatus(501);
    }
}

export async function refreshToken(req, res) {
    try {
        const currentRefreshToken = req.cookies['refresh_token'];

        if (!currentRefreshToken) throw new Error(403);

        const { sessionKey: currentSessionKey, role } = validateToken(currentRefreshToken);
        const session = await findSession(currentSessionKey);
        const { userId, refreshToken: currentSessionRefreshToken } = session;

        if (currentRefreshToken !== currentSessionRefreshToken) throw new Error();

        const newSessionKey = uuidv4();
        const { accessToken, refreshToken } = generateTokenPair({ sessionKey: newSessionKey, userId, role });
        
        setRefreshToken.call(res, refreshToken).status(201).send({ accessToken });
        createSession({ ...session, sessionKey: newSessionKey, refreshToken });
        deleteSession(currentSessionKey);
    } catch(err) {
        console.err(err);

        switch(err.message) {
            case 501:
                return res.sendStatus(501);
            case 418:
                return res.sendStatus(418); //TODO: сделать бан
            default:
                return res.sendStatus(403);
        }
    }
}
