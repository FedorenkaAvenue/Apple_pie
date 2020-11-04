-- reset

DROP TABLE IF EXISTS users;

-- schema

CREATE TABLE users (
    id CHARACTER(32) PRIMARY KEY,
    name CHARACTER VARYING(20) CONSTRAINT name UNIQUE NOT NULL,
    password CHARACTER VARYING(50) NOT NULL,
    email CHARACTER VARYING(30) CONSTRAINT email UNIQUE,
    role INTEGER NOT NULL
);
