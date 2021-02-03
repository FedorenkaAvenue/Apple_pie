import { NextFunction, Request, Response } from 'express';

import { SIGN_IN_EMAIL_QUERY } from '@db/postgres/queries/sign';
import { getSaltedPassword } from '@crypto/satl';
import IUser from '@interfaces/User';

export default async function(req: Request<any, any, IUser>, res: Response, next: NextFunction) {
    try {
        const { email, password } = req.body;

        if (!email || !password) throw Error;

        try {
            const saltedPassword = getSaltedPassword(password as string);
            const { rows, rowCount } = await SIGN_IN_EMAIL_QUERY(email, saltedPassword);

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
