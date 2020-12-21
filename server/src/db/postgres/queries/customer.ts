import { poolDB } from '@db/postgres/index';

export const CUSTOMER_APPLICATION_LIST_QUERY = (userId: string) => poolDB.query({
    text: 'SELECT * FROM applications WHERE author = $1;',
    values: [ userId ]
});
