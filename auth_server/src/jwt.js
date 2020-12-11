import jwt from 'jsonwebtoken';

const { sign, verify, TokenExpiredError, JsonWebTokenError } = jwt;
const { JWT_SECRET_WORD, SESSION_EXPIRE_TIME } = process.env;

export function generateTokenPair({ id, role }) {
    return ({
        accessToken: sign(
            { id, role },
            JWT_SECRET_WORD,
            {
                expiresIn: 300, // 60 sec * 5
            }
        ),
        refreshToken: sign(
            { id, role },
            JWT_SECRET_WORD,
            {
                expiresIn: Number(SESSION_EXPIRE_TIME),
            }
        )
    });
}

export function validateToken(token) {
    try {
        return verify(token, JWT_SECRET_WORD);
    } catch(err) {
        console.log(err);

        switch(true) {
            case err instanceof TokenExpiredError:
                throw new Error(403);
            case err instanceof JsonWebTokenError:
                throw new Error(418);
            default:
                throw new Error(err);
        }
    }
}
