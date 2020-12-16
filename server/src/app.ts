import express, { Express } from 'express';
import { urlencoded, json } from 'body-parser';
import cookieParser from 'cookie-parser';

import signRouter from '@routers/sign';
import authRouter from '@routers/auth';
import customerRouter from '@routers/customer';
import userRouter from '@routers/user';
import checkAuth from '@middleWares/checkAuth';
import checkRole from '@middleWares/checkRole';

const app: Express = express();

app
    .use(cookieParser())
    .use(urlencoded({ extended: true }))
    .use(json())
    .use((req, res, next) => {
        res.append('Access-Control-Allow-Origin', '*').
            append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE').
            append('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });

app
    .use('/api/sign', signRouter)
    .use('/api/auth', authRouter)
    .use('/api/customer', checkAuth, checkRole(1), customerRouter)
    .use('/api/user', userRouter);

export default app;
