import { generateTokenPair, validateToken } from './jwt.js';
import { createSession } from './db.js';
import { setRefreshToken } from './cookie.js';

export async function signUp(req, res) {
    try {
        const { body: { role }, query: { id }, ip } = req;
        const { accessToken, refreshToken } = generateTokenPair({ id, role });
        const successSaved = await createSession({ id, refreshToken, ip, ua: req.get('User-Agent') });
        
        if (!successSaved) throw new Error(successSaved);

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

        const { id, role } = validateToken(currentRefreshToken);
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
