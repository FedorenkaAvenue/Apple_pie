import 'module-alias/register'; // для алиасов путей TS

import app from './app';

const { APP_PORT } = process.env;

async function runServer() {
    try {
        app.listen(APP_PORT || 80);
    } catch(err) {
        console.error(`ошибка старта. ${err}`);
    }
}

runServer();
