# syntax=docker/dockerfile:1

FROM mcr.microsoft.com/playwright:v1.47.2

WORKDIR /app

COPY ["./package.json", "./package-lock.json", "./"]
RUN npm ci
RUN npx playwright install --with-deps chromium

COPY ["./tsconfig.json", "./"]
COPY ["./scripts", "./scripts"]
