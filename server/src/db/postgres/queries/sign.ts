import { poolDB } from '@db/postgres/index';

export const LOGIN_QUERY = (email: string, password: string) => poolDB.query({
    text: 'SELECT "userId", role FROM users WHERE email = $1 AND password = $2;',
    values: [ email, password ]
});
