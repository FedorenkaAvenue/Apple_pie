import { poolDB } from '@db/postgres/index';

import { IUserSchema } from '@interfaces/DB';

// ! решить как умно переопределить
//@ts-ignore
interface ICreateUser extends IUserSchema {
    verify?: any
}

export const CREATE_USER_QUERY = ({ userId, name, password, email, role }: ICreateUser) => poolDB.query({
    text: 'INSERT INTO users VALUES ($1, $2, $3, $4, $5);',
    values: [ userId, name, password, email, role ]
});

export const GET_USER_QUERY = (userId: string) => poolDB.query({
    text: 'SELECT * FROM users WHERE "userId" = $1;',
    values: [ userId ]
});

export const DELETE_USER_QUERY = (userId: string) => poolDB.query({
    text: 'DELETE FROM users WHERE "userId" = $1',
    values: [ userId ]
});

export const EXIST_NAME_QUERY = (name: string) => poolDB.query({
    text: 'SELECT EXISTS(SELECT 1 FROM users WHERE name = $1);',
    values: [ name ]
});

export const EXIST_EMAIL_QUERY = (email: string) => poolDB.query({
    text: 'SELECT EXISTS(SELECT 1 FROM users WHERE email = $1);',
    values: [ email ]
});
