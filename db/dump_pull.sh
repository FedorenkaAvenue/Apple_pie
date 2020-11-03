#!bin/sh

docker exec apple_pie_db pg_dump -U postgres --data-only -f ./temp_dump.sql &&
docker cp apple_pie_db:/app/temp_dump.sql ./backup/dump.sql
