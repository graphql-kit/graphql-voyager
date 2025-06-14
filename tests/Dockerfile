# syntax=docker/dockerfile:1

FROM node:24

WORKDIR /app

COPY ["./package.json", "./package-lock.json", "./"]
RUN npm ci
RUN npx playwright install --with-deps chromium

COPY ["./tsconfig.json", "./"]
COPY ["./scripts", "./scripts"]
