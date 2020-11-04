import { Request, Response } from "express";

import { poolDB } from '@db/connection';
import { EXIST_NAME_QUERY, EXIST_EMAIL_QUERY } from '@queries/user';

export default async function(req: Request, res: Response) {
    try {
        const { name, email } = req.query;

        switch (true) {
            case typeof name !== 'undefined': {
                const { rows } = await poolDB.query(EXIST_NAME_QUERY(name as string));
                
                return res.status(200).json(rows[0])
            }

            case typeof email !== 'undefined': {
                const { rows } = await poolDB.query(EXIST_EMAIL_QUERY(email as string));
                
                return res.status(200).json(rows[0]);
            }

            default:
                res.status(400).send();
        }
    } catch(err) {
        console.log(err);
    }
}
