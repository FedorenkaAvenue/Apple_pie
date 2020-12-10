import { createClient } from "redis";

import { SESSION_EXPIRES_IN } from './config.js';

const { REDIS_PORT, REDIS_HOST, REDIS_DB_NUMBER } = process.env;
const client = createClient({
    port: REDIS_PORT,
    host: REDIS_HOST,
    db: REDIS_DB_NUMBER
});

export async function createSession({ id, role, refreshToken, ip, ua }) {
    return await client.hmset('session', {
        'id': 'SERIAL PRIMARY KEY',
        'userId': id,
        'role': role,
        'refreshToken': refreshToken,
        'ua': ua,
        'fingerprint': 'character varying(200) NOT NULL',
        'ip': ip,
        'expiresIn': SESSION_EXPIRES_IN,
        'createdAt': Date.now()
    });
}

client.on("error", error => console.error(error));
