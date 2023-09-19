const Hapi = require('@hapi/hapi');
const { hapi: voyagerMiddleware } = require('graphql-voyager/middleware');
const myTestSchema = require('./schema');

const { ApolloServer } = require('@apollo/server');
const hapiApollo = require('@as-integrations/hapi').default;

const init = async () => {
  const server = Hapi.server({
    port: 3001,
    host: 'localhost',
  });

  const apolloServer = new ApolloServer({
    typeDefs: myTestSchema,
  });

  await apolloServer.start().then(console.log('Apollo server started'));

  await server.register({
    plugin: hapiApollo,
    options: {
      apolloServer,
      path: '/graphql',
    },
  });

  await server.register({
    plugin: voyagerMiddleware,
    options: {
      path: '/voyager',
      endpointUrl: '/graphql',
      displayOptions: {
        sortByAlphabet: true,
      },
    },
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
