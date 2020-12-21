import { NextFunction, Request, Response } from 'express';

import { CUSTOMER_APPLICATION_LIST_QUERY } from '@db/postgres/queries/customer';
import { IAccessTokenPayload } from '@interfaces/IToken';

export default async function(req: Request, res: Response, next: NextFunction) {
    const { userId } = res.locals.userTokenPayload as IAccessTokenPayload;
    
    try {
        const { rows } = (await CUSTOMER_APPLICATION_LIST_QUERY(userId));
        
        res.status(200).json({ appList: rows });
    } catch(err) {
        next(err);
    }
}
