ARG     NODEJS_VERSION=14.15.4
ARG     NODEJS_FLAVOR="-slim"
FROM    node:$NODEJS_VERSION$NODEJS_FLAVOR


RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY . /server
ENV HOME /server

WORKDIR $HOME

RUN npm i
RUN npm run build
