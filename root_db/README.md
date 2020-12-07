# Database for main server @Apple_pie project

## Params

   * **root user**: `postgres`
   * **root pass**: `2700`
   * **exposed host**: `localhost`
   * **port**: `5432`
   * **database**: `postgres`

## Tools

 * ##### Schema

   * `bash schema_update.sh` update schema

 * ##### Dump

    * `bash dump_deploy.sh` to restore dump
    * `bash dump_pull.sh` to refresh dump

## Logs

 * `docker logs -f apple_pie_root_db`

## Docs

[Schema docs](./SCHEMA_DOC.md).
