import { poolDB } from '@db/postgres/index';

export const ARTIST_SKETCHES_QUERY = (userId: string) => poolDB.query({
    text: 'SELECT sketches FROM users WHERE "userId" = $1;',
    values: [ userId ]
});
