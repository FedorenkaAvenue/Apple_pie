import { Response } from "express";

const { SESSION_EXPIRE_TIME, COOKIE_REFRESH_TOKEN_NAME } = process.env;
const COOKIE_REFRESH_TOKEN_PATH = '/api/auth';

export function setRefreshToken(this: Response, refreshToken: string): Response {
    this.cookie(
        COOKIE_REFRESH_TOKEN_NAME as string,
        refreshToken,
        {
            httpOnly: true,
            maxAge: Number(SESSION_EXPIRE_TIME) * 1000,
            path: COOKIE_REFRESH_TOKEN_PATH,
            sameSite: 'strict',
            // secure: true // ! включить при HTTPS
        }
    );

    return this;
}

export function clearRefreshToken(this: Response): Response {
    this.clearCookie(
        COOKIE_REFRESH_TOKEN_NAME as string,
        {
            path: COOKIE_REFRESH_TOKEN_PATH
        }
    );

    return this;
}
