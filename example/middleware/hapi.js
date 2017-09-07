const Hapi = require('hapi');
const { graphqlHapi } = require('graphql-server-hapi');
const { hapi: voyagerMiddleware } = require('graphql-voyager/middleware');
const schema = require('../schema');

const server = new Hapi.Server();

server.connection({
  port: 3001
});

server.register([
  {
    register: graphqlHapi,
    options: {
      path: '/graphql',
      graphqlOptions: {
        schema,
      },
      route: {
        cors: true
      }
    }
  },
  {
    register: voyagerMiddleware,
    options: {
      path: '/voyager',
      route: {
        cors: true
      },
      endpointUrl: '/graphql',
      displayOptions: {
        sortByAlphabet: true,
      },
    },
  }
],() => {
  server.start(() => {
    console.log(`Started on ${server.info.uri}/voyager`);
  })
});
