FROM node:14.15.4-alpine3.11

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build:release

RUN cd docker && npm install

CMD ["node", "docker/server.js"]

