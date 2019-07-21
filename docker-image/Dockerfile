FROM node:11.14.0-alpine

RUN apk add \
    ca-certificates \
    musl-dev 

ADD dist/ /graphql-voyager/dist/
ADD middleware/ /graphql-voyager/middleware/
ADD src/ /graphql-voyager/src/
ADD package.json /graphql-voyager/package.json
ADD docker-image/package.json /graphql-voyager/docker-image/package.json
ADD docker-image/package-lock.json /graphql-voyager/docker-image/package-lock.json

RUN npm install

ADD docker-image/index.js /graphql-voyager/docker-image/index.js

WORKDIR /graphql-voyager/

WORKDIR /graphql-voyager/docker-image/

RUN npm install

ENV PORT=3001

CMD node index.js
