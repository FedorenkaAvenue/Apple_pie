import { NextFunction, Request, Response } from 'express';

import { GET_USER_QUERY } from '@db/postgres/queries/user';

export default async function({ params }: Request, res: Response, next: NextFunction) {
    const userId = params['id'];

    try {
        const userData = await (await GET_USER_QUERY(userId)).rows[0];
        
        if (!userData) throw Error;

        try {
            const { password, email, ...filteredUserData } = userData;

            res.status(200).json(filteredUserData);
        } catch(err) {
            next(err);
        }
    } catch(err) {
        res.sendStatus(404);
    }
}
