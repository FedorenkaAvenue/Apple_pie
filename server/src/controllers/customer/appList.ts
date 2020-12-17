import { Request, Response } from 'express';

import { CUSTOMER_APPLICATIONS_QUERY } from '@db/postgres/queries/customer';

export default async function(req: Request, res: Response) {
    try {
        const { userId } = res.locals.userTokenPayload;
        const { applications } = (await CUSTOMER_APPLICATIONS_QUERY(userId)).rows[0];
        
        res.status(200).json({ appList: applications });
    } catch(err) {
        console.log(err);

        res.sendStatus(501);
    }
}
