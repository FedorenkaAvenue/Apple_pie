import { NextFunction, Request, Response } from 'express';

import googleAuth from '@crypto/googleAuth';

export default async function(req: Request, res: Response, next: NextFunction) {
    const { token } = req.body;

    try {
        if (!token) throw new Error();

        const user = googleAuth(token);
        console.log(user);
        
        res.sendStatus(200);
    } catch(err) {
        res.sendStatus(400);
    }
}
