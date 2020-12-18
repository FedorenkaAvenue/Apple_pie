import { Response } from "express";

const { SESSION_EXPIRE_TIME, COOKIE_REFRESH_TOKEN_NAME } = process.env;

export function setRefreshToken(this: Response, refreshToken: string): Response {
    this.cookie(
        COOKIE_REFRESH_TOKEN_NAME as string,
        refreshToken,
        {
            httpOnly: true,
            maxAge: Number(SESSION_EXPIRE_TIME) * 1000,
            path: '/api/auth',
            sameSite: 'strict',
            // secure: true // ! включить при HTTPS
        }
    );

    return this;
}

export function clearRefreshToken(this: Response): Response {
    this.clearCookie(COOKIE_REFRESH_TOKEN_NAME as string);

    return this;
}
