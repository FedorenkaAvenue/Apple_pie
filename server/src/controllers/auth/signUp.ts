import { Request, Response } from "express";

import { poolDB } from '@db/connection';
import { SIGNUP_QUERY } from '@queries/auth';
import { getSaltedPassword } from '@crypto/satl';
import generateId from '@utils/generateId';

import { ISignUpBody } from '@interfaces/requests';

export async function signUpController(req: Request<any, any, ISignUpBody>, res: Response): Promise<void> {
    try {
        const { body: { name, password, email, role } } = req;
        const id = generateId(); // ? generate id inside DB (UUID)
        const saltedPassword = getSaltedPassword(password, id);

        try {
            await poolDB.query(SIGNUP_QUERY({ id, name, password: saltedPassword, email, role }));

            res.cookie('token', 'asdsfasdfsadfasdf').status(200).send();
        } catch({ constraint }) {
            res.status(409).json({ existed: constraint });
        }
    } catch(err) {
        res.status(400).send();
    }
};
