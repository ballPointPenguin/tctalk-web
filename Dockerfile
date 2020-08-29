# BUILD
FROM node:lts-alpine as build

LABEL maintainer="Benjamin Rosas <ben@aliencyb.org>"

ARG API_URL
ENV API_URL=$API_URL
ENV NODE_ENV production
WORKDIR /app/

RUN apk update && apk upgrade
RUN apk add --no-cache --virtual .build \
  autoconf automake build-base libpng-dev libtool nasm python

RUN npm install -g --silent gatsby-cli

COPY package*.json ./
RUN npm ci --silent

RUN apk del .build

COPY . .

RUN gatsby build


# RUN
FROM nginx:alpine

COPY --from=build /app/public /usr/share/nginx/html
