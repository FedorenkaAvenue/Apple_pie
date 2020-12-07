import express, { Express } from 'express';
import bodyParser from 'body-parser';

import signRouter from '@routers/sign';
import userRouter from '@routers/user';

const app: Express = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*').
        append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE').
        append('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

app.use('/api/sign', signRouter);
app.use('/api/user', userRouter);

app.get('/api', (req, res) => res.send('Apple_pie root server test!!')); // test

export default app;
