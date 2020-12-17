import { NextFunction, Request, Response } from 'express';

import { IAccessTokenPayload } from '@interfaces/IToken';

export default async function(req: Request, res: Response, next: NextFunction) {
    try {
        const { userId } = res.locals.userTokenPayload as IAccessTokenPayload;

        try {
            // const { applications } = (await CUSTOMER_APPLICATIONS_QUERY(userId)).rows[0];
            
            res.sendStatus(201);
        } catch(err) {
            next(err);
        }
    } catch(err) {
        console.log(err);

        res.sendStatus(408);
    }
}
