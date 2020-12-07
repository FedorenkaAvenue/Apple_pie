import { Response } from "express";

const MAX_COOKIE_AGE = 86400 * 30;

export function setRefreshToken(this: Response, refreshToken: string): Response {
    this.cookie(
        'refresh_token',
        refreshToken,
        {
            httpOnly: true,
            maxAge: MAX_COOKIE_AGE,
            path: '/api/auth',
            sameSite: 'strict'
        }
    );

    return this;
}
