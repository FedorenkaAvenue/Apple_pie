import { poolDB } from '@db/postgres/index';

import IApplication from '@interfaces/Application';

export const ADD_APPLICATION_QUERY = ({
    id, author, title, descr, images, created_at
}: IApplication) => poolDB.query({
    text: `
        WITH add_appl AS (INSERT INTO applications VALUES ($1, $2, $3, $4, $5, $6))
        UPDATE users SET applications = applications || $1 WHERE id = $2;
    `,
    values: [ id, author, title, descr, images, created_at ]
});
