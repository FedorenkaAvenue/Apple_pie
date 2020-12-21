import { createClient } from 'redis';

const { REDIS_PORT, REDIS_HOST, REDIS_DB_NUMBER } = process.env;
const redisClient = createClient({
    port: Number(REDIS_PORT),
    host: REDIS_HOST,
    db: REDIS_DB_NUMBER
});

redisClient.on("error", err => console.log(err));

export default redisClient;
