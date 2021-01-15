import { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import googleAuth from '@crypto/googleAuth';
import { CREATE_USER_QUERY, DELETE_USER_QUERY } from '@db/postgres/queries/user';

export default async function(req: Request, res: Response, next: NextFunction) {
    const { credentials, name } = req.body;

    try {
        if (!credentials) throw new Error();

        const { name: googleName } = await googleAuth(credentials);
        const userName = name || googleName;
        const userId: string = uuidv4();

        // try {
        //     await CREATE_USER_QUERY({
        //         id: userId,
        //         name: userName,
        //         password: getSaltedPassword(password),
        //         created_at: Date.now(),
        //         email, role
        //     });
        // } catch(err) {
        //     const { code, constraint } = err;

        //     switch(code) {
        //         case '23505': // существующее уникальное поле
        //             return res.status(409).json({ field: constraint });
        //         case '22001': // неверный формат данных
        //             return res.status(406).json({ field: constraint });
        //         default:
        //             next(err);
        //     }
        // }
        
        res.sendStatus(200);
    } catch(err) {
        res.sendStatus(400);
    }
}
