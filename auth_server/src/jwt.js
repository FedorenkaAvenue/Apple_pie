import jwt from 'jsonwebtoken';

const { sign, verify } = jwt;
const { JWT_SECRET_WORD, SESSION_EXPIRE_TIME } = process.env;

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
            expiresIn: Number(SESSION_EXPIRE_TIME)
        }
    );
}

export function validateToken(token) {
    try {
        return verify(token, JWT_SECRET_WORD);
    } catch(err) {
        //TODO: сделать валидацию на ошибки: взлом или устарел токен
        throw new Error(err.message);
    }
}
