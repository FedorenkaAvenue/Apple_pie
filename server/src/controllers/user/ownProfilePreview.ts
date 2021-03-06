import { NextFunction, Request, Response } from 'express';

import { GET_USER_PREVIEW_QUERY } from '@db/postgres/queries/user';

export default async function(req: Request, res: Response, next: NextFunction) {
    const { userId } = res.locals.userTokenPayload;

    try {
        const userPreviewData = await (await GET_USER_PREVIEW_QUERY(userId)).rows[0];

        res.status(200).json(userPreviewData);
    } catch(err) {
        next(err);
    }
}
