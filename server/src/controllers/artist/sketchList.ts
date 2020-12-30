import { NextFunction, Request, Response } from 'express';

import { ARTIST_SKETCH_LIST_QUERY } from '@db/postgres/queries/artist';
import { IAccessTokenPayload } from '@interfaces/IToken';

export default async function(req: Request, res: Response, next: NextFunction) {
    const { userId } = res.locals.userTokenPayload as IAccessTokenPayload;
    
    try {
        const { rows } = (await ARTIST_SKETCH_LIST_QUERY(userId));
        
        res.status(200).json({ sketchList: rows });
    } catch(err) {
        next(err);
    }
}
