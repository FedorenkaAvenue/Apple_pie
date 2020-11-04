import { QueryConfig } from 'pg';

import { ISignUpBody } from '@interfaces/requests';

export const SIGNUP_QUERY = ({ name, password, email, role }: ISignUpBody): QueryConfig => ({
    text: 'INSERT INTO users VALUES ($1, $2, $3, $4);',
    values: [ name, password, email, role ]
});
