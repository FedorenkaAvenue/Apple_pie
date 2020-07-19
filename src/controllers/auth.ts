import { Request, Response } from "express";

import UserSchema from '../models/User';

export async function register(req: Request, res: Response) {
    const newUser = new UserSchema({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        registerDate: Date.now()
    });

    try {
        const existedUser = await UserSchema.findOne({ email: req.body.email });

        if (existedUser) return res.status(409).json({ message: 'ты уже есть!' });

        await newUser.save();
        console.log(`${new Date()}: created new user ${JSON.stringify(req.body)}`);
    } catch(err) {
        console.log(err);
    }
};
