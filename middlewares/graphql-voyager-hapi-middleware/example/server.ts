import * as Hapi from 'hapi';
import { graphqlHapi } from 'graphql-server-hapi';
import * as schema from 'graphql-voyager/example/schema';
import voyagerMiddleware from '../src/index';

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
      voyagerOptions: {
        endpointUrl: '/graphql',
      },
      route: {
        cors: true
      }
    },
  }
],() => {
  server.start(() => {
    console.log(`Started on ${server.info.uri}`);
  })
});
