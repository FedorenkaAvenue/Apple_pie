#!bin/bash

docker exec apple_pie_root_db psql -U postgres -f ./schema.sql
