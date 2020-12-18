import 'module-alias/register';

import app from './app';

try {
    app.listen(process.env.APP_PORT || 80);
} catch(err) {
    console.error(`ошибка старта. ${err}`);
}
