import { poolDB } from '@db/connection';

import { IUser } from '@interfaces/IUser';
// import { ILogInBody } from '@controllers/sign/signIn';

export const SIGNUP_QUERY = ({ id, name, password, email, role }: IUser) => poolDB.query({
    text: 'INSERT INTO users VALUES ($1, $2, $3, $4, $5);',
    values: [ id, name, password, email, role ]
});

// export const LOGIN_QUERY = ({ email, password }: ILogInBody) => poolDB.query({
//     text: 'SELECT id, role FROM users WHERE email = $1 AND password = $2;',
//     values: [ email, password ]
// });
