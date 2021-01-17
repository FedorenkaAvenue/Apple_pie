import { NextFunction, Request, Response } from 'express';

import googleAuth from '@crypto/googleAuth';
import ACCOUNT_TYPE from '@constants/accountTypes';

export default async function(req: Request, res: Response, next: NextFunction) {
    const { credentials, role, name: userName } = req.body;

    try {
        if (!credentials || !role) throw new Error();

        const { name: googleName, email, picture: photo, id } = await googleAuth(credentials);
        const name = userName || googleName;

        res.locals = {
            accountType: ACCOUNT_TYPE.GOOGLE,
            email, role, name, photo, id
        }

        next();
    } catch(err) {
        res.sendStatus(400);
    }
}
