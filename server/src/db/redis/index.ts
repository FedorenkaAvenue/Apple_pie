import { createClient } from 'redis';

const { REDIS_PORT, REDIS_HOST, REDIS_DB_NUMBER } = process.env;
const redisClient = createClient({
    port: Number(REDIS_PORT),
    host: REDIS_HOST,
    db: REDIS_DB_NUMBER
});

redisClient.on("error", err => console.log(err));

export default redisClient;

// //TODO: возвращать сессию
// export function findSession(sessionKey) {
//     try {
//         return new Promise((resolve, reject) => {
//             client.hgetall(sessionKey, (err, session) => {
//                 if (err) reject(err);
    
//                 resolve(session);
//             });
//         });
//     } catch(err) {
//         console.error(err);

//         throw new Error(501);
//     }
// }

// export function deleteSession(sessionKey) {
//     try {
//         client.del(sessionKey);
//     } catch(err) {
//         console.error(err);

//         throw new Error(501);
//     }
// }
