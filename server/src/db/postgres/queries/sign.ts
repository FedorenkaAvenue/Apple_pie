import { QueryResult } from 'pg';

import { poolDB } from '@db/postgres/index';
import IUser from '@interfaces/User';

export const LOGIN_QUERY = (email: string, password: string) => poolDB.query({
    text: 'SELECT id, role, verify FROM users WHERE email = $1 AND password = $2;',
    values: [ email, password ]
}) as Promise<QueryResult<Pick<IUser, "id" | "role" | "verify">>>;
