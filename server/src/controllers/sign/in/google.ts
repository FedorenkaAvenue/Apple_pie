import { NextFunction, Request, Response } from 'express';

import { SIGN_IN_SOCIAL_QUERY } from '@db/postgres/queries/sign';
import googleAuth from '@crypto/googleAuth';
import ACCOUNT_TYPE from '@constants/accountTypes';

export default async function(req: Request, res: Response, next: NextFunction) {
    const { credentials } = req.body;

    try {
        if (!credentials) throw new Error();

        const { id } = await googleAuth(credentials);

        try {
            const { rows, rowCount } = await SIGN_IN_SOCIAL_QUERY(id, ACCOUNT_TYPE.GOOGLE);

            if (!rowCount) throw new Error();

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
