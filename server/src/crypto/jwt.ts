import { sign, verify, TokenExpiredError, JsonWebTokenError } from 'jsonwebtoken';

import { IAccessTokenPayload, IRefreshTOkenPayload, ITokenPair } from '@interfaces/IToken';

const { JWT_SECRET_WORD, SESSION_EXPIRE_TIME, ACCESS_TOKEN_EXPIRE_TIME } = process.env;

type IGenerateTokenPair = {
    userId: string
    role: number
    sessionKey: string
    verify: boolean
}

export function generateTokenPair({ userId, role, sessionKey, verify }: IGenerateTokenPair): ITokenPair {
    return ({
        accessToken: sign(
            { userId, role, verify } as IAccessTokenPayload,
            JWT_SECRET_WORD as string,
            { expiresIn: Number(ACCESS_TOKEN_EXPIRE_TIME) }
        ),
        refreshToken: sign(
            { sessionKey } as IRefreshTOkenPayload,
            JWT_SECRET_WORD as string,
            { expiresIn: Number(SESSION_EXPIRE_TIME) }
        )
    });
}

export function validateToken(token: string): IAccessTokenPayload | IRefreshTOkenPayload {
    try {
        return <IRefreshTOkenPayload | IAccessTokenPayload>verify(token, JWT_SECRET_WORD as string);
    } catch(err) {
        console.log(err);

        switch(true) {
            // case err instanceof TokenExpiredError:
            //     throw new Error('406');
            case err instanceof JsonWebTokenError:
                throw new Error('451');
            default:
                throw new Error(err);
        }
    }
}
