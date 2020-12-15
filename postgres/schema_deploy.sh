#!bin/bash
# обновить схему на удаленном сервере

docker exec apple_pie_postgres psql -U postgres -f ./schema.sql
