import { ClientConfig } from "pg";

export const CONNECT_CONFIG: ClientConfig = {
    user: 'postgres',
    host: 'postgres://apple_pie_db',
    database: 'postgres',
    password: '2700',
    port: 5432,
};
