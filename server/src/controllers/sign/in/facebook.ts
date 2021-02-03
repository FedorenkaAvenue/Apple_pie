import { NextFunction, Request, Response } from 'express';

import { SIGN_IN_SOCIAL_QUERY } from '@db/postgres/queries/sign';
import facebookAuth from '@crypto/facebookAuth';
import ACCOUNT_TYPE from '@constants/accountTypes';

export default async function(req: Request, res: Response, next: NextFunction) {
    const { credentials } = req.body;

    try {
        if (!credentials) throw Error;

        const { id } = await facebookAuth(credentials);

        try {
            const { rows, rowCount } = await SIGN_IN_SOCIAL_QUERY(id, ACCOUNT_TYPE.FACEBOOK);

            if (!rowCount) throw Error;

            const { id: userId, role, verify } = rows[0];
            
            res.locals = { verify, userId, role };
            next();
        } catch(err) {
            res.sendStatus(403);
        }
    } catch(err) {
        res.sendStatus(400);
    }
}
