FROM node:14.15.0-alpine3.10

WORKDIR /app

COPY . .

# app
ENV APP_PORT=80

# db
ENV PGUSER=postgres
ENV PGHOST=apple_pie_root_db
ENV PGDATABASE=postgres
ENV PGPASSWORD=2700
ENV PGPORT=5432

RUN yarn

CMD ["yarn", "dev"]
