# Running as Docker container

You can use `graphql-voyager` without any changes in your code, by running it as a Docker container.

1. Create `docker-compose.yml` file
2. Paste following content in it:

```yaml
version: '3.2'
services:
  voyager:
    image: dhcenter/graphql-voyager:latest
    ports:
      - 3400:3400
    restart: always
    environment:
      GRAPHQL_ENDPOINT: https://api.st-retrospect.dh-center.ru/graphql
```

3. Change necessary environment variables
4. Run with `docker-compose up`
