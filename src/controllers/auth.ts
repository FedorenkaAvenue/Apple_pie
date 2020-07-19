import { Request, Response } from "express";

import UserModel from '@models/User';

export async function register(req: Request, res: Response) {
    const { name, email, password } = req.body;

    // тут немешало бы валидацию данных

    try {
        const existedUser = await UserModel.findOne({ email: email });

        if (existedUser) {
            res.status(409).json({ message: 'ты уже есть!' });
        } else {
            const newUser = new UserModel({
                email: email,
                name: name,
                password: password,
                registerDate: Date.now()
            });
            
            await newUser.save();
            res.status(200).json({ message: 'зареган!' });
            console.log(`${new Date()}: created new user ${JSON.stringify(req.body)}`);
        }
    } catch(err) {
        res.status(500).send();
        console.log(err);
    }
};
