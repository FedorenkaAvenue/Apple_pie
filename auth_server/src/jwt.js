import jwt from 'jsonwebtoken';
import { config } from 'dotenv'; config(); // ? хз почему в index.js не срабатывает SESSION_EXPIRES_IN

const { sign } = jwt;
const { JWT_SECRET_WORD, SESSION_EXPIRES_IN } = process.env;

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
