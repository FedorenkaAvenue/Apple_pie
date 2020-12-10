import { generateAccessToken, generateRefreshToken } from './jwt.js';
import { createSession } from './redis.js';

export async function signUp(req, res) {
    try {
        const { id, role, ip, ua } = req.body;
        const accessToken = generateAccessToken({ id, role });
        const refreshToken = generateRefreshToken({ id, role });
        const successSaved = await createSession({ id, role, refreshToken, ip, ua });
        
        if (!successSaved) throw new Error(successSaved);

        res.status(201).send({ accessToken, refreshToken });
    } catch(err) {
        console.log(err);
        res.sendStatus(501);
    }
}
