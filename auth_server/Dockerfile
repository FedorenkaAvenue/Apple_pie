FROM node:14.15.0-alpine3.10

WORKDIR /app

COPY . .

ENV APP_PORT=80

RUN yarn

CMD ["yarn", "dev"]
