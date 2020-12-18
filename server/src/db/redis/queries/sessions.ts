import redisClient from '@db/redis/index';
import { ISession } from '@interfaces/DB';

type ICreateSessionArgs = {
    sessionKey: string
    userId: string
    refreshToken: string
    ua: string
    ip: string
}

export async function CREATE_SESSION({ sessionKey, userId, refreshToken, ua, ip }: ICreateSessionArgs): Promise<string | undefined> {
    try {
        return new Promise((resolve, reject) => {
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
                (err, result) => err ? reject(err) : resolve(result)
            );
        });
    } catch(err) {
        console.log(err);

        throw new Error('501');
    }
}

export async function GET_SESSION(sessionKey: string): Promise<ISession> {
    try {
        return new Promise((resolve, reject) => {
            //@ts-ignore // ! разобраться с типом
            redisClient.hgetall(sessionKey, (err, session) => err ? reject(err) : resolve(session) );
        });
    } catch(err) {
        console.error(err);

        throw new Error('501');
    }
}

export function DELETE_SESSION(sessionKey: string): void {
    try {
        redisClient.del(sessionKey);
    } catch(err) {
        console.error(err);

        throw new Error('501');
    }
}