const { SESSION_EXPIRE_TIME } = process.env;

export function setRefreshToken(refreshToken) {
    this.cookie(
        'refresh_token',
        refreshToken,
        {
            httpOnly: true,
            maxAge: Number(SESSION_EXPIRE_TIME) * 1000,
            path: '/api/auth',
            sameSite: 'strict'
        }
    );

    return this;
}
