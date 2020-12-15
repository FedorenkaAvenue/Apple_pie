import { Request, Response } from 'express';

import { LOGIN_QUERY } from '@db/postgres/queries/sign';
import { getSaltedPassword } from '@crypto/satl';
import createSession from '@servises/sessions/createSession';
import { setRefreshToken } from '@crypto/cookie';
import { IUserSchema } from '@interfaces/DB';

type ILogInBody = {
    password: string
    email: string
}

export default async function(req: Request<any, any, ILogInBody>, res: Response) {
    try {
        const { body: { email, password }, ip } = req;
        const saltedPassword = getSaltedPassword(password);

        if (!email && !password) throw new Error();

        try {
            const { rows, rowCount } = await LOGIN_QUERY(email, saltedPassword);

            if (!rowCount) throw new Error();

            const { userId, role }: IUserSchema = rows[0];
            
            try {
                const { accessToken, refreshToken } = await createSession({
                    userId, role, ip,
                    ua: req.get('User-Agent') as string
                });

                setRefreshToken.call(res, refreshToken).status(201).send({ accessToken });
            } catch(err) {
                console.log(err);

                res.sendStatus(501);
            }
        } catch(err) {
            console.log(err);

            res.status(403).send();
        }
    } catch(err) {
        console.log(err);

        res.sendStatus(400);
    }
}
