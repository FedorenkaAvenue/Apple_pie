import { Request, Response } from "express";

import { SIGNUP_QUERY } from '@queries/auth';
import { getSaltedPassword } from '@crypto/satl';
import { setUserToken } from '@servises/cookie';
import generateId from '@utils/generateId';

import { ISignUpBody } from '@interfaces/requests';

export default async function signUpController(req: Request<any, any, ISignUpBody>, res: Response) {
    try {
        const { body: { name, password, email, role } } = req;
        const id = generateId();
        const saltedPassword = getSaltedPassword(password);

        try {
            await SIGNUP_QUERY({ id, name, password: saltedPassword, email, role });

            setUserToken.call(res, { id, role }).status(201).send();
        } catch({ code, constraint }) {
            if (code === '23505') return res.status(409).json({ existed: constraint });

            throw new Error();
        }
    } catch(err) {
        res.status(400).send();
    }
};
