import express, { Express } from 'express';
import bodyParser from 'body-parser';

import authRouter from '@routers/auth';
import userRouter from '@routers/user';

const app: Express = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

export default app;
