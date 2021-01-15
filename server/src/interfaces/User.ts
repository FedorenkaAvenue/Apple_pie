type IUser = {
    id: string
    acc_type: number
    role: number
    email: string
    name: string
    password: string
    created_at: number
    verify: boolean
    applications?: string
    sketches?: string
}

export default IUser;
