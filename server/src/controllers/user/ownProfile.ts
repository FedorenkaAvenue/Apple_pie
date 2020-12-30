import { NextFunction, Request, Response } from "express";

import { GET_USER_QUERY } from '@db/postgres/queries/user';
import { IAccessTokenPayload } from '@interfaces/IToken';

export default async function(req: Request, res: Response, next: NextFunction) {
    const { userId } = res.locals.userTokenPayload as IAccessTokenPayload;

    try {
        const userData = await (await GET_USER_QUERY(userId)).rows[0];

        res.status(200).json(userData);
    } catch(err) {
        next(err);
    }
}
