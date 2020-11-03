import 'module-alias/register'; // для алиасов путей
import { config } from 'dotenv'; config();

import app from './app';

const { APP_PORT } = process.env;

async function runServer() {
    try {
        app.listen(APP_PORT);
    } catch(err) {
        console.error(`ошибка старта. ${err}`);
    }
}

runServer();
