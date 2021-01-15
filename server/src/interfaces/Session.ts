type ISession = {
    userId: string
    refreshToken: string
    ua: string
    // fingerPrint: string
    ip: string
    createAt: number
}

export default ISession;
