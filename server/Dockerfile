FROM node:10.23-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
COPY .env ./

RUN yarn

COPY . .

EXPOSE 2700

VOLUME /app/src

CMD ["yarn", "dev"]
