import { NextFunction, Request, Response } from 'express';

import ACCOUNT_TYPE from '@constants/accountTypes';

export default async function signUpController(req: Request, res: Response, next: NextFunction) {
    const { password, email, role, name } = req.body;

    try {
        if (!password || !email || !role || !name) throw Error;

        res.locals = {
            accountType: ACCOUNT_TYPE.EMAIL,
            password, email, role, name
        }

        next();
    } catch(err) {
        res.sendStatus(400);
    }
}
