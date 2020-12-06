#!bin/bash

docker exec apple_pie_db psql -U postgres -f ./schema.sql
