import { NextFunction, Request, Response } from 'express';

import { GET_USER_QUERY } from '@db/postgres/queries/user';

export default async function(req: Request, res: Response, next: NextFunction) {
    const { userId } = res.locals.userTokenPayload;

    try {
        const userData = await (await GET_USER_QUERY(userId)).rows[0];
        const { password, email, ...filteredUserData } = userData;

        res.status(200).json(filteredUserData);
    } catch(err) {
        next(err);
    }
}
