import { QueryResult } from 'pg';

import { poolDB } from '@db/postgres/index';
import IUser from '@interfaces/User';

type IUserReturnData = Pick<IUser, "id" | "role" | "verify">;

const userReturnQueryData = 'id, role, verify';

export const SIGN_IN_EMAIL_QUERY = (email: string, password: string) => poolDB.query({
    text: `SELECT ${userReturnQueryData} FROM users WHERE email = $1 AND password = $2;`,
    values: [ email, password ]
}) as Promise<QueryResult<IUserReturnData>>;

export const SIGN_IN_SOCIAL_QUERY = (openId: string, accountType: number) => poolDB.query({
    text: `SELECT ${userReturnQueryData} FROM users WHERE open_id = $1 AND acc_type = $2;`,
    values: [ openId, accountType ]
}) as Promise<QueryResult<IUserReturnData>>;
