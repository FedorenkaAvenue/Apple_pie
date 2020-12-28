FROM nginx:1.14

RUN rm /etc/nginx/conf.d/default.conf && \
    mkdir -p /var/www/images/appl && \
    mkdir -p /var/www/images/sketch && \
    mkdir -p /var/www/images/user

COPY config/ /etc/nginx/conf.d/
