import 'module-alias/register';

import app from './app';
import loadDotenv from '@utils/loadDotenv';

loadDotenv();

try {
    app.listen(process.env.APP_PORT || 80);
} catch(err) {
    console.error(`ошибка старта. ${err}`);
}
