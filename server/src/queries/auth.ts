import { QueryConfig } from 'pg';

import { IUser } from '@interfaces/IUser';

export const SIGNUP_QUERY = ({ id, name, password, email, role }: IUser): QueryConfig => ({
    text: 'INSERT INTO users VALUES ($1, $2, $3, $4, $5);',
    values: [ id, name, password, email, role ]
});
