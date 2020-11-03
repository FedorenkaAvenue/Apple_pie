import { Request, Response } from "express";

export async function registrationController(req: Request, res: Response) {
    // const { name, email, password } = req.body;

    try {
        // // const existedUser = await UserModel.findOne({ email: email });
        res.status(200).send();
    } catch(err) {

    }
};
