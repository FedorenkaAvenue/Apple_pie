import { Response } from "express";

export function login(req: Request, res: Response): void {
    res.status(200).json({
        result: req.body
    });
};
