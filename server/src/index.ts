import 'module-alias/register'; // для алиасов путей
import { config } from 'dotenv'; config();
import { Client } from 'pg';

import app from './app';
import { CONNECT_CONFIG } from '@config/postgreSQL';

const pgClient = new Client(CONNECT_CONFIG);
const { APP_PORT } = process.env;

async function runServer() {
    try {
        await pgClient.connect();
        app.listen(APP_PORT);
    } catch(err) {
        console.error(`ошибка старта. ${err}`);
    }
}

runServer();
