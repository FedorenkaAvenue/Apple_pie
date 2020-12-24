import { NextFunction, Request, Response } from 'express';

export default function(req: Request, res: Response, next: NextFunction) {
    res.redirect(307, '/api/auth/clear');
}
