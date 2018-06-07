const Hapi = require('hapi');
const { graphqlHapi } = require('graphql-server-hapi');
const { hapi: voyagerMiddleware } = require('graphql-voyager/middleware');
const schema = require('../schema');

const server = new Hapi.Server({
  port: 3001
});

const init = async () => {
  await server.register([
    {
      plugin: graphqlHapi,
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
      plugin: voyagerMiddleware,
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
    },
  ]);

  await server.start()
    .then(() => {
      console.log(`Started on ${server.info.uri}/voyager`);
    });
};

init();
