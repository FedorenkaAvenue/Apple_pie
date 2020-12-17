-- reset

DROP TABLE IF EXISTS users;

-- schema

CREATE TABLE users (
    "userId" CHARACTER(36) PRIMARY KEY,
    name CHARACTER VARYING(20) CONSTRAINT name UNIQUE NOT NULL,
    password CHARACTER VARYING(50) NOT NULL,
    email CHARACTER VARYING(30) CONSTRAINT email UNIQUE,
    role INTEGER CONSTRAINT role CHECK (role > -1 AND role < 3) NOT NULL,
    applications CHARACTER[] DEFAULT '{}',
    sketches CHARACTER[] DEFAULT '{}'
);
