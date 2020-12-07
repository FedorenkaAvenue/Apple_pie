import { SignOptions, sign } from 'jsonwebtoken';

const JWT_SECRET_WORD = 'Vitya';

export type IUserTokenPayload = {
    id: string
    role: number
}

const WJT_HEADER: SignOptions = {
    expiresIn: 60 * 60 * 24,
};

export function generateUserToken(userPayload: IUserTokenPayload) {
    return sign(userPayload, JWT_SECRET_WORD, WJT_HEADER);
}
