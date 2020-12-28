# Apple pie🥧

![online](https://img.shields.io/website?url=http://185.253.218.139) ![license](https://img.shields.io/github/license/bringmetheaugust/Apple_pie) ![releaze](https://img.shields.io/github/v/release/bringmetheaugust/Apple_pie) ![realise date](https://img.shields.io/github/release-date/bringmetheaugust/Apple_pie) ![issues](https://img.shields.io/github/issues-raw/bringmetheaugust/Apple_pie) ![PR](https://img.shields.io/github/issues-pr-raw/bringmetheaugust/Apple_pie)

## Description

Web app for searching tattoo artists and customers.

## Join

 * **test domain**: http://185.253.218.139

## Deploy

 * ![Docker](https://img.shields.io/badge/-Docker-000?&logo=docker)
    - `docker-compose up --no-start` to deploy containers
    - `docker-compose start` to up containers

## Tools

 * ![Docker](https://img.shields.io/badge/-Docker-000?&logo=docker)
    - `docker-compose up --no-start --build` rebuild containers
    - `docker-compose stop` stop containers

## Docs

 - [nginx](./nginx/README.md)

 - [client](./client/README.md)

 - [server](./server/README.md)

   * [Swagger API](http://localhost/api/docs) (local)

 - [redis](./redis/README.md)

   * [DB schema (models)](./redis/SCHEMA_DOC.md)  

 - [postgres](./postgres/README.md)

   * [DB schema](./postgres/SCHEMA_DOC.md)

<!-- ## WTF?

<details>
   <summary>📔Create <i>Heroku</i> mulltiapp in monorepo</summary>
   <ul>
      <li><b>build app</b>
         <ul>
            <li><code>heroku create apple-pie-server --region eu --remote heroku-server</code></li>
            <li><code>heroku buildpacks:add --app apple-pie-server heroku/nodejs</code></li>
         </ul>
      </li>
      <li><b>add buildpack to manage multiapps in monorepo</b>
         <ul>
            <li><code>heroku buildpacks:add --app apple-pie-server https://github.com/lstoll/heroku-buildpack-monorepo -i 1</code></li>
            <li><code>heroku config:set --app apple-pie-server APP_BASE=./server</code></li>
         </ul>
      </li>
      <li><b>add buildpack for saparate Procfile</b>
         <ul>
            <li><code>heroku buildpacks:add --app apple-pie-server heroku-community/multi-procfile -i 2</code></li>
            <li><code>heroku config:set --app apple-pie-server PROCFILE=./server</code></li>
         </ul>
      </li>
   </ul>
</details> -->
