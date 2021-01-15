import { QueryResult } from 'pg';

import { poolDB } from '@db/postgres/index';
import IApplication from '@interfaces/Application';

export const CUSTOMER_APPLICATION_LIST_QUERY = (userId: string) => poolDB.query({
    text: 'SELECT * FROM applications WHERE author = $1;',
    values: [ userId ]
}) as Promise<QueryResult<Array<IApplication>>>;
