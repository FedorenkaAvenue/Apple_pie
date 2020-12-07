import { Request, Response } from 'express';

import { LOGIN_QUERY } from '@queries/auth';
import { getSaltedPassword } from '@crypto/satl';
import { setUserToken } from '@servises/cookie';

import { ILogInBody } from '@interfaces/requests';

export default async function(req: Request<any, any, ILogInBody>, res: Response) {
    try {
        const { email, password } = req.body;
        const saltedPassword = getSaltedPassword(password);

        try {
            const { rows, rowCount } = await LOGIN_QUERY({ email, password: saltedPassword });

            if (!rowCount) throw new Error();

            const { id, role } = rows[0];
            
            setUserToken.call(res, { id, role }).status(200).send();
        } catch(err) {
            res.status(403).send();
        }
    } catch(err) {
        res.send(400).send();
    }
}
