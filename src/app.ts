import express, { Application } from 'express';
import bodyParser from 'body-parser';

import authRoute from './routes/auth';

const app: Application = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/test', authRoute);

export default app;
