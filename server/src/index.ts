import 'module-alias/register';

export const { IS_DEV } = process.env; // ! определять перед импортом app

import app from './app';
import loadDotenv from '@utils/loadDotenv';

loadDotenv();

try {
    app.listen(process.env.APP_PORT || 80);
} catch(err) {
    console.error(`ошибка старта. ${err}`);
}
