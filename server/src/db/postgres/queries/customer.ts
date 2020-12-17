import { poolDB } from '@db/postgres/index';

export const CUSTOMER_APPLICATIONS_QUERY = (userId: string) => poolDB.query({
    text: 'SELECT applications FROM users WHERE "userId" = $1;',
    values: [ userId ]
});
