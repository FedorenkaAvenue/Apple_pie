export const MONGODB_PORT: string = 'mongodb://localhost:27017/';

// офф дока https://mongoosejs.com/docs/connections.html
export const MONGOOSE_CONNECT_CONFIG = {
    dbName: 'apple_pie_DB',
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
};
