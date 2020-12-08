FROM redis:6.0.9-alpine

WORKDIR /app

COPY redis.conf ./
COPY dump ./dump

CMD [ "redis-server", "/app/redis.conf" ]
