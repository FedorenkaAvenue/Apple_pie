import { v4 as uuidv4 } from 'uuid';

import { generateTokenPair } from '@crypto/jwt';
import { GET_SESSION, DELETE_SESSION, CREATE_SESSION } from '@db/redis/queries/sessions';
import { ITokenPair } from '@interfaces/IToken';

export default async function(currentRefreshToken: string, sessionKey: string, role: number): Promise<ITokenPair> {
    try {
        const session = await GET_SESSION(sessionKey);
        const { userId, refreshToken: currentSessionRefreshToken } = session;

        if (currentRefreshToken !== currentSessionRefreshToken) throw new Error();

        const newSessionKey = uuidv4();
        const { accessToken, refreshToken } = generateTokenPair(userId, role, newSessionKey);
        
        CREATE_SESSION({ ...session, sessionKey: newSessionKey, refreshToken });
        DELETE_SESSION(sessionKey);

        return ({ accessToken, refreshToken });
    } catch(err) {
        throw new Error(err);
    }
}
