import { Request, Response } from 'express';

import { ARTIST_SKETCHES_QUERY } from '@db/postgres/queries/artist';

export default async function(req: Request, res: Response) {
    try {
        const { userId } = res.locals.userTokenPayload;
        const { sketches } = (await ARTIST_SKETCHES_QUERY(userId)).rows[0];
        
        res.status(200).json({ sketchList: sketches });
    } catch(err) {
        console.log(err);

        res.sendStatus(501);
    }
}
