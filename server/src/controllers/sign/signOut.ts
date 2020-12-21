import { Request, Response } from 'express';

export default function(req: Request, res: Response) {
    res.redirect('/api/auth/signout');
}
