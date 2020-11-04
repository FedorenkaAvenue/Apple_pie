export type ISignUpBody = {
    name: string
    password: string
    email: string
    role: number
}

export type ILogInBody = {
    email: string
    password: string
}
