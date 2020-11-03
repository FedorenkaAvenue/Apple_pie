FROM postgres:alpine

WORKDIR /app

ENV POSTGRES_PASSWORD 2700

COPY schema.sql ./

ADD backup ./backup

EXPOSE 5432
