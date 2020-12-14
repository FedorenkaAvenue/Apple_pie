import { Request, Response } from "express";

import { EXIST_NAME_QUERY, EXIST_EMAIL_QUERY } from '@db/postgres/queries/user';

export default async function(req: Request, res: Response) {
    try {
        const { name, email } = req.query;

        switch (true) {
            case typeof name !== 'undefined': {
                const { rows } = await EXIST_NAME_QUERY(name as string);
                
                return res.status(200).json(rows[0])
            }

            case typeof email !== 'undefined': {
                const { rows } = await EXIST_EMAIL_QUERY(email as string);
                
                return res.status(200).json(rows[0]);
            }

            default:
                res.status(400).send();
        }
    } catch(err) {
        res.status(500).send();
    }
}
