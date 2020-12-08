#!bin/sh
# скачать дамп из удаленного сервера на локальный

docker exec apple_pie_postgres pg_dump -U postgres --data-only -f ./temp_dump.sql &&
docker cp apple_pie_postgres:/app/temp_dump.sql ./backup/dump.sql
