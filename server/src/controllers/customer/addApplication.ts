import { NextFunction, Request, Response } from 'express';

import { IAccessTokenPayload } from '@interfaces/IToken';
import { IApplicationSchema } from '@interfaces/DB';

type IRequestBody = IApplicationSchema & {};

export default async function(req: Request<any, any, IRequestBody>, res: Response, next: NextFunction) {
    const { userId } = res.locals.userTokenPayload as IAccessTokenPayload;
    const { files, body: { title, descr } } = req;
    
    try {
        if (!files.length) throw new Error();

        try {
            
            res.status(201).json({ files });
        } catch(err) {
            next(err);
        }
    } catch(err) {
        res.sendStatus(400);
    }
}
