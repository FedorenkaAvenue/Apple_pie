#!bin/bash

docker exec apple_pie_db psql -U postgres postgres -f backup/dump.sql
