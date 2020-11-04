import { Response } from "express";

import { generateUserToken, IUserTokenPayload } from '@crypto/jwt';

export function setUserToken(this: Response, userData: IUserTokenPayload): Response {
    this.cookie(
        'token',
        generateUserToken(userData),
        { httpOnly: true }
    );

    return this;
}
