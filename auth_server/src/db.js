import { createClient } from "redis";

const { REDIS_PORT, REDIS_HOST, REDIS_DB_NUMBER, SESSION_EXPIRE_TIME } = process.env;
const client = createClient({
    port: REDIS_PORT,
    host: REDIS_HOST,
    db: REDIS_DB_NUMBER
});

export async function createSession({ sessionKey, userId, refreshToken, ip, ua }) {
    try {
        const savedResult = await new Promise((resolve, reject) => {
            client.hmset(
                sessionKey,
                {
                    'userId': userId,
                    'refreshToken': refreshToken,
                    'ua': ua,
                    'fingerprint': 'null',
                    'ip': ip,
                    'expiresIn': Number(SESSION_EXPIRE_TIME),
                    'createdAt': Date.now()
                },
                (err, result) => {
                    if (err) reject(err);

                    resolve(result);
                }
            );
        });

        if (!savedResult) throw new Error(savedResult);

        client.expire(sessionKey, SESSION_EXPIRE_TIME);

        return savedResult;
    } catch(err) {
        console.log(err);

        throw new Error(501);
    }
}

//TODO: возвращать сессию
export function findSession(sessionKey) {
    try {
        return new Promise((resolve, reject) => {
            client.hgetall(sessionKey, (err, session) => {
                if (err) reject(err);
    
                resolve(session);
            });
        });
    } catch(err) {
        console.error(err);

        throw new Error(501);
    }
}

export function deleteSession(sessionKey) {
    try {
        client.del(sessionKey);
    } catch(err) {
        console.error(err);

        throw new Error(501);
    }
}

client.on("error", error => console.error(error));
