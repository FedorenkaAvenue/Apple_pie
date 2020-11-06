# Database for @Apple_pie

## Params

 * #### ![Telegram](https://img.shields.io/badge/-Docker-000?&logo=docker)

   * **root user**: `postgres`
   * **root pass**: `2700`
   * **exposed host**: `localhost`
   * **port**: `5432`
   * **database**: `postgres`

 * #### ![Heroku](https://img.shields.io/badge/-Heroku-000?&logo=heroku)

   * **host**: `ec2-54-75-229-28.eu-west-1.compute.amazonaws.com`
   * **database**: `dabqqm36ke959v`
   * **user**: `cbrneteuqkyxzv`
   * **port**: `5432`
   * **password**: `00b2296a9a7c3237dbd586b784c4150a620d14e73faf3d15717b8e74a63e7d2f`
   * **URI**: `postgres://cbrneteuqkyxzv:00b2296a9a7c3237dbd586b784c4150a620d14e73faf3d15717b8e74a63e7d2f@ec2-54-75-229-28.eu-west-1.compute.amazonaws.com:5432/dabqqm36ke959v`
   * **Heroku CLI**: `heroku pg:psql postgresql-fitted-78395 --app apple-pie-db`

## Tools

 * ##### Schema

   * `bash schema_update.sh` update schema on *Docker*

 * ##### Dump

    * `bash dump_deploy.sh` to restore *Docker* dump
    * `bash dump_pull.sh` to refresh *Docker* dump

## Logs

 * **Docker**: `docker logs -f apple_pie_db`
 * **Heroku**: `heroku logs --app apple-pie-db --tail`

## Docs
Simple [schema docs](./SCHEMA_DOC.md).
