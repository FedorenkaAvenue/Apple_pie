import { Request, Response } from 'express';

export default async function(req: Request, res: Response) {
    try {
       res.status(200).json({ appList: [] });
    } catch(err) {
        console.log(err);

        res.sendStatus(501);
    }
}
