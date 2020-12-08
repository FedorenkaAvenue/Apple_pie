# HTTP server (Nginx) for @Apple_pie project

## Proxy

   * `/` client
   * `/api` root server
   * `/api/auth` auth server
   * `/img` image hosting

## Params

   * **open HTTP/HTTPS port**: `80`

## Tools

 * `docker exec -it apple_pie_nginx bash` enter container
 * `docker logs -f apple_pie_nginx` watch logs