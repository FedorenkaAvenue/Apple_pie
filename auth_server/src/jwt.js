import jwt from 'jsonwebtoken';

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
            expiresIn: 259200, // 360 * 24 * 30
        }
    );
}
