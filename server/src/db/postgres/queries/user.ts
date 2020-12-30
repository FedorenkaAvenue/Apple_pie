import { poolDB } from '@db/postgres/index';

import { IUserSchema } from '@interfaces/DB';
import { QueryResult } from 'pg';

type ICreateUser = Omit<IUserSchema, "verify">;

export const CREATE_USER_QUERY = ({ id, name, password, email, role, created_at }: ICreateUser) => poolDB.query({
    text: 'INSERT INTO users VALUES ($1, $2, $3, $4, $5, $6);',
    values: [ id, name, password, email, role, created_at ]
});

export const GET_USER_QUERY = (userId: string) => <Promise<QueryResult<IUserSchema>>>poolDB.query({
    text: 'SELECT name, role, created_at, verify FROM users WHERE id = $1;',
    values: [ userId ]
});

export const DELETE_USER_QUERY = (userId: string) => poolDB.query({
    text: 'DELETE FROM users WHERE id = $1;',
    values: [ userId ]
});

export const UPDATE_USER_FIELD_QUERY = (userId: string, field: keyof IUserSchema, value: any) => poolDB.query({
    text: `UPDATE ONLY users SET ${field} = $2 WHERE id = $1 AND NOT ${field} = $2;`,
    values: [ userId, value ]
});

export const EXIST_NAME_QUERY = (name: string) => poolDB.query({
    text: 'SELECT EXISTS(SELECT 1 FROM users WHERE name = $1);',
    values: [ name ]
});

export const EXIST_EMAIL_QUERY = (email: string) => poolDB.query({
    text: 'SELECT EXISTS(SELECT 1 FROM users WHERE email = $1);',
    values: [ email ]
});
