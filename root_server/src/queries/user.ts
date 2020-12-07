import { poolDB } from '@db/connection';

export const EXIST_NAME_QUERY = (name: string) => poolDB.query({
    text: 'SELECT EXISTS(SELECT 1 FROM users WHERE name = $1);',
    values: [ name ]
});

export const EXIST_EMAIL_QUERY = (email: string) => poolDB.query({
    text: 'SELECT EXISTS(SELECT 1 FROM users WHERE email = $1);',
    values: [ email ]
});
