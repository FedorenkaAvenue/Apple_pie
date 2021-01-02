import { NextFunction, Request, Response } from 'express';

export default function(req: Request, { redirect }: Response, next: NextFunction) {
    redirect(307, '/api/auth/clear');
}
