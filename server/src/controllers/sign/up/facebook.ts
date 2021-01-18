import { NextFunction, Request, Response } from 'express';

import facebookAuth from '@crypto/facebookAuth';
import ACCOUNT_TYPE from '@constants/accountTypes';

export default async function(req: Request, res: Response, next: NextFunction) {
    const { credentials, role, name: userName } = req.body;

    try {
        if (!credentials || !role) throw new Error();

        const { facebookName, email, photo, id } = await facebookAuth(credentials);
        const name = userName || facebookName;

        res.locals = {
            accountType: ACCOUNT_TYPE.FACEBOOK,
            email, role, name, photo, id
        }
       
        next();
    } catch(err) {
        res.sendStatus(400);
    }
}
