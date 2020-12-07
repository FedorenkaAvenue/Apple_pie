#!bin/bash
# обновить схему на удаленном сервере

docker exec apple_pie_root_db psql -U postgres -f ./schema.sql
