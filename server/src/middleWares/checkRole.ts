import { Request, Response, NextFunction } from 'express';

import { IAccessTokenPayload } from '@interfaces/IToken';

type checkRoleMiddleWare = (req: Request, res: Response, next: NextFunction) => void;

export default function(userRole: number): checkRoleMiddleWare {
    return function(req: Request, res: Response, next: NextFunction) {
        const { role } = res.locals.userTokenPayload as IAccessTokenPayload;
    
        role === userRole ? next() : res.sendStatus(403);
    }
}
