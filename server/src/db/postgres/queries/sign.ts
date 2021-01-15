import { QueryResult } from 'pg';

import { poolDB } from '@db/postgres/index';
import IUser from '@interfaces/User';

type IUserReturnData = Pick<IUser, "id" | "role" | "verify">;

export const SIGN_IN_EMAIL_QUERY = (email: string, password: string) => poolDB.query({
    text: 'SELECT id, role, verify FROM users WHERE email = $1 AND password = $2;',
    values: [ email, password ]
}) as Promise<QueryResult<IUserReturnData>>;

export const SIGN_IN_GOOGLE_QUERY = (email: string) => poolDB.query({
    text: 'SELECT id, role, verify FROM users WHERE email = $1;',
    values: [ email ]
}) as Promise<QueryResult<IUserReturnData>>;
