import { QueryResult } from 'pg';

import { poolDB } from '@db/postgres/index';
import { ISketchSchema } from '@interfaces/DB';

export const ARTIST_SKETCH_LIST_QUERY = (userId: string) => poolDB.query({
    text: 'SELECT sketches FROM users WHERE id = $1;',
    values: [ userId ]
}) as Promise<QueryResult<Array<ISketchSchema>>>;
