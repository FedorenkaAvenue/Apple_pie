import { connect } from "mongoose";

import { MONGOOSE_CONNECT_CONFIG, MONGODB_PORT } from '@config/mongoose';

export async function runDB() {
    await connect(MONGODB_PORT, MONGOOSE_CONNECT_CONFIG);
    console.log(`MongoDB запущен. порт:${MONGODB_PORT}`);
}
