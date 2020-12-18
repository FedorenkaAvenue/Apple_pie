-- reset

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS verify_mail;

-- schema

CREATE TABLE users (
    "userId" CHARACTER(36) PRIMARY KEY,
    name CHARACTER VARYING(20) CONSTRAINT name UNIQUE NOT NULL,
    password CHARACTER VARYING(50) NOT NULL,
    email CHARACTER VARYING(30) CONSTRAINT email UNIQUE,
    role INTEGER CONSTRAINT role CHECK (role > 0 AND role < 3) NOT NULL,
    applications CHARACTER[] DEFAULT '{}',
    sketches CHARACTER[] DEFAULT '{}',
    verify BOOLEAN DEFAULT false
);

CREATE TABLE verify_mail (
    id CHARACTER(36) PRIMARY KEY, -- user id
    hash CHARACTER(120) NOT NULL
)
