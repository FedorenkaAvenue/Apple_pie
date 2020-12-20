import { NextFunction, Request, Response } from 'express';

import { UPDATE_USER_FIELD_QUERY } from '@db/postgres/queries/user';
import { validateToken } from '@crypto/jwt';
import { IVerifyEmailToken } from '@interfaces/IToken';

const { JWT_VERIFY_EMAIL_SECRET_WORD } = process.env;

type IRequestQueryParams = {
    key: string
}

export default async function(req: Request<any, any, any, IRequestQueryParams>, res: Response, next: NextFunction) {
    const { key } = req.query;
    
    if (!key) return res.sendStatus(400);
    
    try {
        const { id } = validateToken(decodeURIComponent(key), JWT_VERIFY_EMAIL_SECRET_WORD) as IVerifyEmailToken;

        try {
            const { rowCount } = await UPDATE_USER_FIELD_QUERY(id, 'verify', true);

            res.redirect(`/?verify_email=${Boolean(rowCount)}`);
        } catch(err) {
            next(err);
        }
    } catch(err) {
        res.redirect('/verify_email=false');
    }
}
