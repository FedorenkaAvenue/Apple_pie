import { Request, Response } from "express";

import { poolDB } from '@src/postgreSQL';

export async function registerController(req: Request, res: Response) {
    poolDB.query('SELECT * FROM users', (error, results) => {
        if (error) throw error;

        res.status(200).json(results);
    });
};
