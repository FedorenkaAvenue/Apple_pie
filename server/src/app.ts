import express, { Express } from 'express';
import bodyParser from 'body-parser';

import authRouter from '@routers/auth';

const app: Express = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use('/api/auth', authRouter);

export default app;
