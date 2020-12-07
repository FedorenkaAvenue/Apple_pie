#!bin/bash
# развернуть лоткальный дамп на удаленном сервере

docker exec apple_pie_root_db psql -U postgres postgres -f backup/dump.sql
