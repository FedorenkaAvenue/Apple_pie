import { NextFunction, Request, Response } from 'express';

export default function(err: Error, req: Request, res: Response, next: NextFunction) {
    console.log(err.stack);

    res.sendStatus(520);
}
