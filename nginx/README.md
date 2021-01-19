# HTTP server (Nginx) for @Apple🥧pie project

## Proxy

   * `/` client
   * `/v2` test client
   * `/api` server
   * `/images` image hosting
   * `/docs` Swagger

## Params

   * **Docker open HTTP/HTTPS port**: `80`
   * **images hosting folder (container)**: `/var/www/images`
   * **images hosting folder (local)**: `/var/lib/docker/volumes/apple_pie_image_hosting`
   * **images hosting tree (`/var/www/images`)**:
      * **applications**: `/appl`
      * **sketches**: `/sketch`
      * **users**: `/user`

## Tools

   * `docker exec -it apple_pie_nginx bash` enter container
   * `docker logs -f apple_pie_nginx` watch logs
