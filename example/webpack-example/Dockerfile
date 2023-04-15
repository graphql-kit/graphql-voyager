# syntax=docker/dockerfile:1

FROM node:18

WORKDIR /app

COPY ./graphql-voyager-*.tgz graphql-voyager.tgz

COPY ./example/webpack-example ./example/webpack-example

WORKDIR example/webpack-example
RUN npm install
# FIXME
# RUN npm test

EXPOSE  9091
CMD npm start