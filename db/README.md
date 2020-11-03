## What is this?   

*Postgresql* data base.

## Params

 * root user: **postgres**
 * root pass: **2700**
 * exposed local *http*: **localhost:5432**

## Tools

 * ##### Schema

   * `bash schema_update.sh` to update schema

 * ##### Dump

    * `bash dump_deploy.sh` to restore dump
    * `bash dump_pull.sh` to refresh dump

 * ##### Logs
    * `docker logs -f apple_pie_db`

## Docs
Simple [schema docs](./SCHEMA_DOC.md).
