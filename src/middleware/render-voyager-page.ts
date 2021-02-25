const { version } = require('../package.json');

export interface MiddlewareOptions {
  endpointUrl: string;
  displayOptions?: object;
  headersJS?: string;
  credentials?: string;
}

export default function renderVoyagerPage(options: MiddlewareOptions) {
  const {
    endpointUrl,
    displayOptions,
    headersJS = '{}',
    credentials = 'include',
  } = options;
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset=utf-8 />
  <meta name="viewport" content="user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
  <title>GraphQL Voyager</title>
  <style>
    body {
      padding: 0;
      margin: 0;
      width: 100%;
      height: 100vh;
      overflow: hidden;
    }
    #voyager {
      height: 100vh;
    }
  </style>
  <link rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/graphql-voyager@${version}/dist/voyager.css"
  />
  <script src="https://cdn.jsdelivr.net/fetch/2.0.1/fetch.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react@16/umd/react.production.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@16/umd/react-dom.production.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/graphql-voyager@${version}/dist/voyager.min.js"></script>
</head>
<body>
  <main id="voyager">
    <h1 style="text-align: center; color: #5d7e86;"> Loading... </h1>
  </main>
  <script>
    window.addEventListener('load', function(event) {
      function introspectionProvider(introspectionQuery) {
        return fetch('${endpointUrl}', {
          method: 'post',
          headers: Object.assign({}, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }, ${headersJS}),
          body: JSON.stringify({query: introspectionQuery }),
          credentials: '${credentials}',
        }).then(function (response) {
          return response.text();
        }).then(function (responseBody) {
          try {
            return JSON.parse(responseBody);
          } catch (error) {
            return responseBody;
          }
        });
      }

      GraphQLVoyager.init(document.getElementById('voyager'), {
        introspection: introspectionProvider,
        displayOptions: ${JSON.stringify(displayOptions)},
      })
    })
  </script>
</body>
</html>
`;
}
