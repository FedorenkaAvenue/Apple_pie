FROM node:14.15.3-alpine3.10

WORKDIR /app

COPY . .

ENV APP_PORT=80 COOKIE_REFRESH_TOKEN_NAME=refresh_token

RUN yarn

CMD [ "yarn", "dev" ]
