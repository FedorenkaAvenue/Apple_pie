import { Request, Response } from "express";

import { poolDB } from '@db/connection';
import { SIGNUP_QUERY } from '@queries/auth';

import { ISignUpBody } from '@interfaces/requests';
import { getSaltedPassword } from '@crypto/satl';

export async function signUpController(req: Request<any, any, ISignUpBody>, res: Response): Promise<void> {
    try {
        const { body: { name, password, email, role } } = req;
        // const saltedPassword = getSaltedPassword(password, name);
        const result = await poolDB.query(SIGNUP_QUERY({ name, password, email, role }));

        res.status(200).json(result);
    } catch(err) {
        res.status(400).send();
    }
};
