import express, { Express } from 'express';
import bodyParser from 'body-parser';

import authRouter from '@routers/auth';
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

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

// test
app.get('/', (req, res) => res.send('Heroku Apple_pie test server!!'));

export default app;
