import { createClient } from "redis";

const { REDIS_PORT, REDIS_HOST, REDIS_DB_NUMBER, SESSION_EXPIRE_TIME } = process.env;
const client = createClient({
    port: REDIS_PORT,
    host: REDIS_HOST,
    db: REDIS_DB_NUMBER
});

export async function createSession({ id, refreshToken, ip, ua }) {
    const dateNow = Date.now();

    return await client.hmset(`${id}.${dateNow}`, {
        'userId': id,
        'refreshToken': refreshToken,
        'ua': ua,
        'fingerprint': 'null',
        'ip': ip,
        'expiresIn': Number(SESSION_EXPIRE_TIME),
        'createdAt': dateNow
    });
}

client.on("error", error => console.error(error));
