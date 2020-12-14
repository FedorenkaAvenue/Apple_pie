import jwt from 'jsonwebtoken';

const { sign, verify, TokenExpiredError, JsonWebTokenError } = jwt;
const { JWT_SECRET_WORD, SESSION_EXPIRE_TIME } = process.env;

export type ITokenPair = {
    userId: string
    role: number
    sessionKey: string
}

export function generateTokenPair({ userId, role, sessionKey }: ITokenPair) {
    return ({
        accessToken: sign(
            { userId, role },
            JWT_SECRET_WORD as string,
            {
                expiresIn: 300, // 60 sec * 5
            }
        ),
        refreshToken: sign(
            { sessionKey, role },
            JWT_SECRET_WORD as string,
            {
                expiresIn: Number(SESSION_EXPIRE_TIME),
            }
        )
    });
}

// export function validateToken(token) {
//     try {
//         return verify(token, JWT_SECRET_WORD);
//     } catch(err) {
//         console.warn(err);

//         switch(true) {
//             case err instanceof TokenExpiredError:
//                 throw new Error(403);
//             case err instanceof JsonWebTokenError:
//                 throw new Error(418);
//             default:
//                 throw new Error(err);
//         }
//     }
// }
