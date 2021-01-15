import { Request, Response, NextFunction, RequestHandler } from 'express';

import { IAccessTokenPayload } from '@interfaces/Token';

export default function(userRole: number): RequestHandler {
    return function(req: Request, res: Response, next: NextFunction) {
        const { role } = res.locals.userTokenPayload as IAccessTokenPayload;
    
        role === userRole ? next() : res.sendStatus(403);
    }
}
