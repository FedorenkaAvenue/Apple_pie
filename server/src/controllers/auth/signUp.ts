import { Request, Response } from "express";

import { poolDB } from '@db/connection';
import { SIGNUP_QUERY } from '@queries/auth';

// import { ISignUpBody } from '@interfaces/requests';

export async function signUpController(req: Request, res: Response): Promise<void> {
    try {
        const { body } = req;
        // const { name, password, email, role }: ISignUpBody = body;
        const userId = Math.round(Date.now() / 10000); // todo: rebuild
        const result = await poolDB.query(SIGNUP_QUERY({ userId, ...body }));

        res.status(200).json(result);
    } catch(err) {
        console.log(err);
    }
};
