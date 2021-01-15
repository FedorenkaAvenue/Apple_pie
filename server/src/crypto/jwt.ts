import { sign, verify, TokenExpiredError, JsonWebTokenError } from 'jsonwebtoken';

import { IAccessTokenPayload, IRefreshTOkenPayload, ITokenPair, IVerifyEmailToken } from '@interfaces/Token';

const {
    JWT_AUTH_SECRET_WORD, SESSION_EXPIRE_TIME, ACCESS_TOKEN_EXPIRE_TIME,
    JWT_VERIFY_EMAIL_SECRET_WORD, FAKE_USER_EXPIRE_TIME
} = process.env;

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
            JWT_AUTH_SECRET_WORD as string,
            { expiresIn: Number(ACCESS_TOKEN_EXPIRE_TIME) }
        ),
        refreshToken: sign(
            { sessionKey } as IRefreshTOkenPayload,
            JWT_AUTH_SECRET_WORD as string,
            { expiresIn: Number(SESSION_EXPIRE_TIME) }
        )
    });
}

export function generateAccessEmailVerifyToken(id: string): string {
    return sign(
        { id } as IVerifyEmailToken,
        JWT_VERIFY_EMAIL_SECRET_WORD as string,
        { expiresIn: FAKE_USER_EXPIRE_TIME }
    );
}

export function validateToken(
    token: string, secretWord = JWT_AUTH_SECRET_WORD
): IAccessTokenPayload | IRefreshTOkenPayload | IVerifyEmailToken {
    try {
        return verify(token, secretWord as string) as IRefreshTOkenPayload | IAccessTokenPayload | IVerifyEmailToken;
    } catch(err) {
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
