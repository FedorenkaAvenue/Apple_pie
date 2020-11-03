FROM postgres:alpine

WORKDIR /app

ENV POSTGRES_PASSWORD 2700

ADD backup ./backup

EXPOSE 5432

VOLUME [ "schema.sql" ]
