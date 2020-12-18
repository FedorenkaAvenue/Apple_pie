# HTTP server (Nginx) for @Apple_pie project

## Proxy

   * `/` client
   * `/api` server
   * `/images` image hosting

## Params

   * **open HTTP/HTTPS port**: `80`
   * **/var/www/images**: images hosting folder (inside container)

## Tools

   * `docker exec -it apple_pie_nginx bash` enter container
   * `docker logs -f apple_pie_nginx` watch logs
