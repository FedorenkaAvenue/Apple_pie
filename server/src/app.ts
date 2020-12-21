import express, { Express } from 'express';
import { urlencoded, json } from 'body-parser';
import cookieParser from 'cookie-parser';

import errorHandler from '@middleWares/errorHandler';
import signRouter from '@routers/sign';
import authRouter from '@routers/auth';
import customerRouter from '@routers/customer';
import artistRouter from '@routers/artist';
import userRouter from '@routers/user';
import checkAuth from '@middleWares/checkAuth';
import checkRole from '@middleWares/checkRole';
import { IS_DEV } from '@src/index';

const app: Express = express();

if (IS_DEV) {
    import('@utilsDev/loadSwagger');
}

app.use(urlencoded({ extended: true })).
    use(json()). // ? распределеть к отдельным роутам
    use((req, res, next) => {
        res.append('Access-Control-Allow-Origin', '*').
            append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE').
            append('Access-Control-Allow-Headers', 'Content-Type, Authorization').
            append('Access-Control-Allow-Credentials', 'true');
        next();
    });

app.use('/api/sign', signRouter).
    use('/api/auth', cookieParser(), authRouter).
    use('/api/customer', checkAuth, checkRole(1), customerRouter).
    use('/api/artist', checkAuth, checkRole(2), artistRouter).
    use('/api/user', userRouter);

app.use(errorHandler);

export default app;
