import { QueryConfig } from 'pg';

import { ISignUpBody } from '@interfaces/requests';

export const SIGNUP_QUERY = (args: ISignUpBody): QueryConfig => ({
    text: 'INSERT INTO users VALUES ($1, $2, $3, $4, $5);',
    values: Object.values(args)
});
