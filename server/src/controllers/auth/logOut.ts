import { Request, Response } from 'express';

export default function(req: Request, res: Response) {
    try {
        res.clearCookie('token').status(200).send();
    } catch(err) {
        res.status(500).send();
    }
}
