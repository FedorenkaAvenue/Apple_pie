-- reset

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS applications CASCADE;

-- schema

CREATE TABLE users (
    id CHARACTER(36) PRIMARY KEY UNIQUE,
    acc_type INTEGER CHECK (acc_type > 0 AND acc_type < 4) NOT NULL,
    name CHARACTER VARYING(20) CONSTRAINT name NOT NULL,
    password CHARACTER VARYING(50) DEFAULT NULL,
    email CHARACTER VARYING(30) CONSTRAINT email UNIQUE,
    role INTEGER CONSTRAINT role CHECK (role > 0 AND role < 3) NOT NULL,
    created_at BIGINT NOT NULL,
    verify BOOLEAN DEFAULT true,
    photo TEXT DEFAULT NULL,
    applications CHARACTER(36)[] DEFAULT '{}',
    sketches CHARACTER(36)[] DEFAULT '{}'
);

CREATE TABLE applications (
    id CHARACTER(36) PRIMARY KEY UNIQUE,
    author CHARACTER(36) NOT NULL,
    title TEXT NOT NULL,
    descr TEXT NOT NULL,
    images TEXT[] CONSTRAINT images NOT NULL,
    created_at BIGINT NOT NULL,
    FOREIGN KEY (author) REFERENCES users (id) ON DELETE CASCADE
);
