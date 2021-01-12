export type IUserSchema = {
    id: string
    role: number
    // email: string
    name: string
    created_at: number
    verify: boolean
    applications?: string
    sketches?: string
}
