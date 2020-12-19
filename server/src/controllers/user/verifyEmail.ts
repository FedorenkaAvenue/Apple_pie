import { NextFunction, Request, Response } from 'express';

type IRequestQuery = {
    hash: string
}

export default async function(req: Request<any, any, any, IRequestQuery>, res: Response, next: NextFunction) {
    const { hash } = req.query;
    
    try {
        if (!hash) throw new Error('verify hash is undefined');

        res.redirect('/home');
    } catch(err) {
        next(err);
    }
}
