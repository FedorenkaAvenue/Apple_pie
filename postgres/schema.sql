-- reset

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS applications CASCADE;

-- schema

CREATE TABLE users (
    id CHARACTER(36) PRIMARY KEY UNIQUE,
    name CHARACTER VARYING(20) CONSTRAINT name NOT NULL,
    password CHARACTER VARYING(50) NOT NULL,
    email CHARACTER VARYING(30) CONSTRAINT email UNIQUE,
    role INTEGER CONSTRAINT role CHECK (role > 0 AND role < 3) NOT NULL,
    created_at BIGINT NOT NULL,
    verify BOOLEAN DEFAULT false,
    photo TEXT DEFAULT null,
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
