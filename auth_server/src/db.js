import { createClient } from "redis";

const { REDIS_PORT, REDIS_HOST, REDIS_DB_NUMBER, SESSION_EXPIRE_TIME } = process.env;
const client = createClient({
    port: REDIS_PORT,
    host: REDIS_HOST,
    db: REDIS_DB_NUMBER
});

export async function createSession({ sessionKey, id, refreshToken, ip, ua }) {
    try {
        const savedResult = await client.hmset(sessionKey, {
            'userId': id,
            'refreshToken': refreshToken,
            'ua': ua,
            'fingerprint': 'null',
            'ip': ip,
            'expiresIn': Number(SESSION_EXPIRE_TIME),
            'createdAt': Date.now()
        });
        client.expire(sessionKey, SESSION_EXPIRE_TIME);

        if (!savedResult) throw new Error(savedResult);

        return savedResult;
    } catch(err) {
        console.log(err);

        throw new Error(err);
    }
}

client.on("error", error => console.error(error));
