import { QueryResult } from 'pg';

import { poolDB } from '@db/postgres/index';
import { IApplicationSchema } from '@interfaces/DB';

export const CUSTOMER_APPLICATION_LIST_QUERY = (userId: string) => poolDB.query({
    text: 'SELECT * FROM applications WHERE author = $1;',
    values: [ userId ]
}) as Promise<QueryResult<Array<IApplicationSchema>>>;
