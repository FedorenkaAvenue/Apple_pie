import { Request, Response } from "express";

import { poolDB } from '@src/postgreSQL';

export async function registerController(req: Request, res: Response) {
    try {
        poolDB.query(`INSERT INTO users (name, role) VALUES ('lo', 1);`, (err, results) => {
            if (err) return console.log(err);

            res.status(200).json(results);
        });
    } catch(err) {
        console.log(err);
    }
};
