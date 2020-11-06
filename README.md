# Apple pie

![online](https://img.shields.io/website?url=https://bringmetheaugust.github.io/Apple_pie) ![license](https://img.shields.io/github/license/bringmetheaugust/Apple_pie) ![releaze](https://img.shields.io/github/v/release/bringmetheaugust/Apple_pie) ![realise date](https://img.shields.io/github/release-date/bringmetheaugust/Apple_pie) ![issues](https://img.shields.io/github/issues-raw/bringmetheaugust/Apple_pie) ![PR](https://img.shields.io/github/issues-pr-raw/bringmetheaugust/Apple_pie)

## Description

Web app for searching tattoo masters.

## Join

 * [test dev server](https://apple-pie-server.herokuapp.com) (`https://apple-pie-server.herokuapp.com`)

## Deploy

 * ![Docker](https://img.shields.io/badge/-Docker-000?&logo=docker)
    - `docker-compose up --no-start` to deploy containers
    - `docker-compose start` to up containers

## Docs

#### Main docs

 - [server](./server/README.md)

   * [REST api](./server/API_DOCS.md)

 - [database](./db/README.md)

   * [schema doc](./db/SCHEMA_DOC.md)

 - [client](./client/README.md)

#### Heroku

 - ![server](https://img.shields.io/badge/-server-000?&logo=node.js)

   * **domain**: `https://apple-pie-server.herokuapp.com`
   * **git-url**: `https://git.heroku.com/apple-pie-server.git`
   * **git remote server name**: `heroku-server`
   * **app name**: `apple-pie-server`

 - ![database](https://img.shields.io/badge/-server-000?&logo=postgresql)

   * **domain**: `https://apple-pie-db.herokuapp.com`
   * **git-url**: `https://git.heroku.com/apple-pie-db.git`
   * **app name**: `apple-pie-db`

## WTF?

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
</details>
