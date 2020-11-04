import { SignOptions, sign } from 'jsonwebtoken';

import { JWT_SECRET_WORD } from '@config/crypto';

interface IUserPayload {
    _id: number
    nickname: string
    diaryId: number
}

const WJT_HEADER: SignOptions = {
    expiresIn: 60 * 60 * 24
};

export function generateToken(userPayload: IUserPayload) {
    return sign(userPayload, JWT_SECRET_WORD, WJT_HEADER);
}
