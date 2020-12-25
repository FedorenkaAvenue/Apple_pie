export type ISession = {
    userId: string
    refreshToken: string
    ua: string
    // fingerPrint: string
    ip: string
    createAt: number
}

export type IUserSchema = {
    id: string
    role: number
    email: string
    name: string
    password: string
    created_at: number
    verify: boolean
    applications?: string
    sketches?: string
}

export type IApplicationSchema = {
    id: string
    author: string
    title: string
    descr: string
    images: Array<string>
    created_at: number
}
