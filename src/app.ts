import express, { Express } from 'express';
import bodyParser from 'body-parser';

import authRoute from '@routes/auth';

const app: Express = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/auth', authRoute);

export default app;
