export type IAccessTokenPayload = {
    userId: string
    role: number
    verify: boolean
}

export type IRefreshTOkenPayload = {
    sessionKey: string
}

export type ITokenPair = {
    accessToken: string
    refreshToken: string
}
