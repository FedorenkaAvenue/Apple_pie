# HTTP server (Nginx) for @Apple🥧pie project

## Proxy

   * `/` [client](../client/README.md)
   * `/api` [server](../server/README.md)
   * `/images` image hosting
   * `/docs` [Swagger](../swagger/README.md)

## Image Hosting

   * **folder tree**

      * `/var/www/images/appl` applications
      * `/var/www/images/sketch` sketches
      * `/var/www/images/user` user data

   * **resizing**

      * `$IMAGE_URL/400`
      * `$IMAGE_URL/1024`
      * `$IMAGE_URL/1920`

## Tools🐳

   * `docker exec -it apple_pie_nginx bash` enter container
   * `docker logs -f apple_pie_nginx` watch logs
