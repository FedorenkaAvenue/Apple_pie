import { generateAccessToken, generateRefreshToken, validateToken } from './jwt.js';
import { createSession } from './db.js';

export async function signUp(req, res) {
    try {
        const { id, role, ip, ua } = req.body;
        const accessToken = generateAccessToken({ id, role });
        const refreshToken = generateRefreshToken({ id, role });
        const successSaved = await createSession({ id, refreshToken, ip, ua });
        
        if (!successSaved) throw new Error(successSaved);

        res.status(201).send({ accessToken, refreshToken });
    } catch(err) {
        console.log(err);
        res.sendStatus(501);
    }
}

export async function refreshToken(req, res) {
    try {
        const refreshToken = req.cookies['refresh_token'];

        if (!refreshToken) throw new Error();

        const payload = validateToken(refreshToken);
        
        res.sendStatus(201);
    } catch(err) {
        console.log(err);
        res.sendStatus(403);
    }
}
