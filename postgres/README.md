# PostgreSQL DB for @Apple_pie project

## Params

   * **root user**: `postgres`
   * **root pass**: `2700`
   * **host**: `localhost`
   * **port**: `5432`
   * **database**: `postgres`

## Tools

   *  `docker exec -it apple_pie_postgres bash` enter container
   *  `docker logs -f apple_pie_postgres` watch logs

 * ##### Schema

   * `bash schema_update.sh` update schema

 * ##### Dump

    * `bash dump_deploy.sh` to restore dump
    * `bash dump_pull.sh` to refresh dump

## Docs

[Schema docs](./SCHEMA_DOC.md).
