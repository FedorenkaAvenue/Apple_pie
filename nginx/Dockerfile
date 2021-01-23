FROM nginx:1.14

RUN rm /etc/nginx/conf.d/default.conf && \
    mkdir -p /var/www/images/appl && \
    mkdir -p /var/www/images/sketch && \
    mkdir -p /var/www/images/user && \
    ### nginx-module-image-filter ###
    echo "deb http://nginx.org/packages/mainline/debian/ stretch nginx" >> /etc/apt/sources.list && \
    apt-get update && \
    apt-get install -y wget gnupg2 && \
    wget https://nginx.org/keys/nginx_signing.key && apt-key add nginx_signing.key && \
    apt-get update && apt-get install nginx-module-image-filter -y
    ### ###

COPY ./nginx.conf /etc/nginx/
COPY ./apple_pie_nginx.conf /etc/nginx/conf.d/
