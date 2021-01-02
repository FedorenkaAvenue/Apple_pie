import { NextFunction, Request, Response } from 'express';

import { EXIST_NAME_QUERY, EXIST_EMAIL_QUERY } from '@db/postgres/queries/user';
import { IUserSchema } from "@interfaces/DB";

export default async function({ query }: Request<any, any, any, IUserSchema>, res: Response, next: NextFunction) {
    try {
        const { name, email } = query;

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
        next(err);
    }
}
