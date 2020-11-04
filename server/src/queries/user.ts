import { QueryConfig } from 'pg';

export const EXIST_NAME_QUERY = (name: string): QueryConfig => ({
    text: 'SELECT EXISTS(SELECT 1 FROM users WHERE name = $1);',
    values: [ name ]
});

export const EXIST_EMAIL_QUERY = (email: string): QueryConfig => ({
    text: 'SELECT EXISTS(SELECT 1 FROM users WHERE email = $1);',
    values: [ email ]
});
