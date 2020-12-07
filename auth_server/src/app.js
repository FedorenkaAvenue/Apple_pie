import express from 'express';
import { urlencoded, json } from 'body-parser';

import router from './router.js';

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*').
        append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE').
        append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/api/auth', router);

export default app;
