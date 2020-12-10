# Redis DB for @Apple_pie project

## Params

   * **root user**: ``
   * **root pass**: ``
   * **host**: `localhost`
   * **port**: `6379`
   * **database**: ``

## Tools

 * `docker exec -it apple_pie_redis sh` enter container
 * `docker logs -f apple_pie_redis` watch logs
 * `docker exec -it apple_pie_redis redis-benchmark -q -n 100000 -c 50 -P 12` performance banchmark (Выполнит 100 000 запросов от 50 клиентов по 12 команд одновременно)

## Docs

 * [DB schema (models)](./SCHEMA_DOC.md)    
