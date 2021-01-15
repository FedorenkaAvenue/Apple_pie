import { v4 as uuidv4 } from 'uuid';

import { generateTokenPair } from '@crypto/jwt';
import { GET_USER_QUERY } from '@db/postgres/queries/user';
import { GET_SESSION, DELETE_SESSION, CREATE_SESSION } from '@db/redis/queries/sessions';
import { ITokenPair } from '@interfaces/Token';
import IUser from '@interfaces/User';

export default async function(currentRefreshToken: string, sessionKey: string): Promise<ITokenPair> {
    try {
        const session = await GET_SESSION(sessionKey);
        const { userId, refreshToken: currentSessionRefreshToken } = session;

        if (currentRefreshToken !== currentSessionRefreshToken) throw new Error();

        const { role, verify } = await (await GET_USER_QUERY(userId)).rows[0] as IUser;
        const newSessionKey = uuidv4();
        const { accessToken, refreshToken } = generateTokenPair({ userId, role, sessionKey: newSessionKey, verify });
        
        CREATE_SESSION({ ...session, sessionKey: newSessionKey, refreshToken });
        DELETE_SESSION(sessionKey);

        return ({ accessToken, refreshToken });
    } catch(err) {
        throw new Error(err.message);
    }
}
