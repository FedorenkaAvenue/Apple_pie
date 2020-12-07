import { generateAccessToken, generateRefreshToken } from './jwt.js';

export function getPairToken(req, res) {
    const { id, role } = req.body;

    res.status(201).send({
        accessToken: generateAccessToken({ id, role }),
        refreshToken: generateRefreshToken({ id, role })
    });
}
