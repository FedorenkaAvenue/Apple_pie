#!bin/bash
# развернуть лоткальный дамп на удаленном сервере

docker exec apple_pie_postgres psql -U postgres postgres -f backup/dump.sql
