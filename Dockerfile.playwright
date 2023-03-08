# syntax=docker/dockerfile:1

FROM mcr.microsoft.com/playwright:next

WORKDIR /app

COPY ["./package.json", "./package-lock.json", "./"]
RUN npm ci
RUN npx playwright install --with-deps chromium
