FROM ubuntu:bionic
MAINTAINER elite_squad

RUN apt-get update \
  && apt-get install -y software-properties-common \
  && apt-get install -y wget \
  && apt-get update -y  \
  && apt-get install -y git build-essential unzip make automake autoconf autotools-dev libtool pkg-config gcc g++ \
       zip \
       curl \
       systemd \
       vim \
  && apt-get clean

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash
RUN apt-get install --yes nodejs
RUN node -v
RUN npm -v

RUN ldconfig

COPY . /gibush/backend
ENV HOME /gibush/backend

WORKDIR $HOME

RUN npm i
