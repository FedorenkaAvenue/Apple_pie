import mongoose from "mongoose";
import 'module-alias/register'; // для алиасов путей

import app from './app';

const APP_PORT: number = 2101;
const DB_PORT: string = 'mongodb://localhost:27017/';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

async function runServer() {
    try {
        await mongoose.connect(DB_PORT);
        app.listen(APP_PORT, () => console.log(`
            cервер стартовал. порт:localhost:${APP_PORT}. \n
            база стартовала. порт:${DB_PORT}.
        `));
    } catch(err) {
        console.error(err);
    }
}

runServer();
