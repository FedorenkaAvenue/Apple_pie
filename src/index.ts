import 'module-alias/register'; // для алиасов путей

import app from './app';
import { runDB } from './mongoose';
import { APP_PORT } from '@config/app';

async function runServer() {
    try {
        await runDB();
        app.listen(APP_PORT, () => console.log(`cервер запущен. порт:localhost:${APP_PORT}`));
    } catch(err) {
        console.error(`ошибка старта сервера: ${err}`);
    }
}

runServer();
