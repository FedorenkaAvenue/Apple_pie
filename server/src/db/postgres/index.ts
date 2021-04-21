import { Pool } from 'pg';
import { Sequelize } from 'sequelize';

const { PGUSER, PGDATABASE, PGPASSWORD, PGHOST, PGPORT } = process.env;

// pure connection
export const poolDB = new Pool({
    user: PGUSER,
    password: PGPASSWORD,
    host: PGHOST,
    port: Number(PGPORT),
    database: PGDATABASE
});

// Sequelize connection
export const sequelize = new Sequelize(
    PGDATABASE as string,
    PGUSER as string,
    PGPASSWORD,
    {
        host: PGHOST,
        port: Number(PGPORT),
        dialect: 'postgres'
    }
);

export const { models } = sequelize;
