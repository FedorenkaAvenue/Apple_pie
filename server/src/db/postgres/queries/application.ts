import { poolDB } from '@db/postgres/index';

import { IApplicationSchema } from '@interfaces/DB';

export const ADD_APPLICATION_QUERY = ({ id, owner, title, descr, images, created_at }: IApplicationSchema) => poolDB.query({
    text: 'INSERT INTO applications VALUES ($1, $2, $3, $4, $5, $6);',
    values: [ id, owner, title, descr, images, created_at ]
});
