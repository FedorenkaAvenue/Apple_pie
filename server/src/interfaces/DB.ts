export type ISession = {
    userId: string
    refreshToken: string
    ua: string
    // fingerPrint: string
    ip: string
    createAt: number
}

export type IUserSchema = {
    userId: string
    role: number
    email: string
    name: string
    password: string
}