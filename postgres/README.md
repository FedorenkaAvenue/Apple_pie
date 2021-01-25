# PostgreSQL DB for @Apple🥧pie project

## Params

   * **root user**: `postgres`
   * **root pass**: `2700`
   * **host**: `localhost`
   * **port**: `5432`
   * **database**: `postgres`

## Tools

 * ##### Containers🐳

   *  `docker exec -it apple_pie_postgres bash` enter container
   *  `docker logs -f apple_pie_postgres` watch logs

 * ##### Schema

   * `bash schema_deploy.sh` update schema

 * ##### Dump

    * `bash dump_deploy.sh` to restore dump
    * `bash dump_pull.sh` to refresh dump

## Docs

* [DB schema](./SCHEMA_DOC.md)
