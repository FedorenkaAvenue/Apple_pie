import { Request, Response } from 'express';

export default function(req: Request, res: Response) {
    res.redirect(307, '/api/auth/signout');
}
