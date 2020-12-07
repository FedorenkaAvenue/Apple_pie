import { config } from 'dotenv'; config();

import app from './app.js';

const { APP_PORT } = process.env;

async function runServer() {
    try {
        app.listen(APP_PORT || 80);
    } catch(err) {
        console.error(`ошибка старта. ${err}`);
    }
}

runServer();
