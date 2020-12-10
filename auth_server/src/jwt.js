import jwt from 'jsonwebtoken';

import { SESSION_EXPIRES_IN } from './config.js';

const { sign } = jwt;

const JWT_SECRET_WORD = 'Vitya';

export function generateAccessToken(userPayload) {
    return sign(
        userPayload,
        JWT_SECRET_WORD,
        {
            expiresIn: 300, // 60 sec * 5
        }
    );
}

export function generateRefreshToken(userPayload) {
    return sign(
        userPayload,
        JWT_SECRET_WORD,
        {
            expiresIn: SESSION_EXPIRES_IN
        }
    );
}
