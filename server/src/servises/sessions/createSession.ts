import { v4 as uuidv4 } from 'uuid';

import { generateTokenPair } from '@crypto/jwt';
import redisClient from '@db/redis/index';

type ICreateSession = {
    userId: string
    role: number
    ua: string
    ip: string
}

const { SESSION_EXPIRE_TIME } = process.env;

export default async function({ userId, role, ua, ip }: ICreateSession) {
    const sessionKey = uuidv4();
    const { accessToken, refreshToken } = generateTokenPair({ userId, role, sessionKey });
    
    try {
        await new Promise((resolve, reject) => {
            redisClient.hmset(
                sessionKey,
                {
                    'userId': userId,
                    'refreshToken': refreshToken,
                    'ua': ua,
                    'fingerprint': 'null',
                    'ip': ip,
                    'createdAt': Date.now()
                },
                (err, result) => {
                    if (err) reject(err);

                    resolve(result);
                }
            );
        });

        redisClient.expire(sessionKey, Number(SESSION_EXPIRE_TIME));

        return ({ accessToken, refreshToken });
    } catch(err) {
        console.log(err);

        throw new Error();
    }
}
