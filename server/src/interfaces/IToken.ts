export type IAccessTokenPayload = {
    userId: string
    role: number
}

export type IRefreshTOkenPayload = {
    sessionKey: string
    role: number
}

export type ITokenPair = {
    accessToken: string
    refreshToken: string
}
