import { QueryResult } from 'pg';

import { poolDB } from '@db/postgres/index';
import IUser from '@interfaces/User';

type ICreateUser = Omit<IUser, "verify"> & {
    verify?: boolean
}

export const CREATE_USER_QUERY = ({
    id, acc_type, name, password, email, role, photo, created_at, verify
}: ICreateUser) => poolDB.query({
    text: `
        INSERT INTO users
        (id, acc_type, name, password, email, role, photo, created_at, verify)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);
    `,
    values: [ id, acc_type, name, password, email, role, photo, created_at, verify ]
}) as Promise<QueryResult<IUser>>;

export const GET_USER_QUERY = (userId: string) => poolDB.query({
    text: 'SELECT * FROM users WHERE id = $1;',
    values: [ userId ]
}) as Promise<QueryResult<IUser>>;

export const GET_USER_PREVIEW_QUERY = (userId: string) => poolDB.query({
    text: 'SELECT id, name, photo FROM users WHERE id = $1;',
    values: [ userId ]
}) as Promise<QueryResult<IUser>>;

export const DELETE_USER_QUERY = (userId: string) => poolDB.query({
    text: 'DELETE FROM users WHERE id = $1;',
    values: [ userId ]
});

export const UPDATE_USER_FIELD_QUERY = (userId: string, field: keyof IUser, value: any) => poolDB.query({
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
