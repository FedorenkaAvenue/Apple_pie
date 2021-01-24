FROM redis:alpine

WORKDIR /app

COPY redis.conf ./
# COPY backup ./backup

CMD [ "redis-server", "/app/redis.conf" ]
