import { poolDB } from '@db/postgres/index';

import { IVerifyEmailSchema } from '@interfaces/DB';

export const CREATE_VERIFY_ITEM_QUERY = ({ id: userId, hash: verifyHash }: IVerifyEmailSchema) => poolDB.query({
    text: 'INSERT INTO verify_mail VALUES ($1, $2);',
    values: [ userId, verifyHash ]
});
