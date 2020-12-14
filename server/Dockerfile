FROM node:14.15.0-alpine3.10

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

CMD ["yarn", "dev"]
