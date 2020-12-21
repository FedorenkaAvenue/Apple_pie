import { poolDB } from '@db/postgres/index';

export const ARTIST_SKETCH_LIST_QUERY = (userId: string) => poolDB.query({
    text: 'SELECT sketches FROM users WHERE id = $1;',
    values: [ userId ]
});
