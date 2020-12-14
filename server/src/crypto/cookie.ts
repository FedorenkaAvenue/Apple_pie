import { Response } from "express";

const { SESSION_EXPIRE_TIME } = process.env;

export function setRefreshToken(this: Response, refreshToken: string): Response {
    this.cookie(
        'refresh_token',
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
