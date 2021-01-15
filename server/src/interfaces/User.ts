type IUser = {
    id: string
    acc_type: number
    role: number
    email: string
    name: string
    created_at: number
    verify: boolean
    photo?: string
    password?: string
    applications?: string
    sketches?: string
}

export default IUser;
