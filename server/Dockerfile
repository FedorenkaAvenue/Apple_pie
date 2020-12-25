FROM node:14.15.0-alpine3.10

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
COPY typingModules.d.ts ./
COPY tsconfig.json ./

ENV APP_PORT=80
ENV COOKIE_REFRESH_TOKEN_NAME=refresh_token

RUN yarn

CMD ["yarn", "dev"]
