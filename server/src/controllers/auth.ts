import { Request, Response } from "express";

import { poolDB } from '@db/connection';
import { SIGNUP_QUERY } from '@queries/auth';

// import { ISignUpBody } from '@interfaces/requests';

export async function signUpController(req: Request, res: Response): Promise<void> {
    try {
        const { body } = req;
        // const { name, password, email, role }: ISignUpBody = body;
        const userId = Math.round(Date.now() / 10000); // todo: rebuild

        poolDB.query(SIGNUP_QUERY({ userId, ...body }), (err, results) => {
            if (err) return res.status(400).send();

            res.status(200).json(results);
        });
    } catch(err) {
        console.log(err);
    }
};
