const { version } = require('../package.json');

export interface MiddlewareOptions {
  endpointUrl: string;
  displayOptions: object;
  headersJS?: string;
}

export default function renderVoyagerPage(options: MiddlewareOptions) {
  const { endpointUrl, displayOptions } = options;
  const headersJS = options.headersJS ? options.headersJS : '{}';
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset=utf-8 />
  <meta name="viewport" content="user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui">
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
    href="//cdn.jsdelivr.net/npm/graphql-voyager@${version}/dist/voyager.css"
  />
  <script src="//cdn.jsdelivr.net/fetch/2.0.1/fetch.min.js"></script>
  <script src="//cdn.jsdelivr.net/react/15.4.2/react.min.js"></script>
  <script src="//cdn.jsdelivr.net/react/15.4.2/react-dom.min.js"></script>
  <script src="//cdn.jsdelivr.net/npm/graphql-voyager@${version}/dist/voyager.min.js"></script>
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
          credentials: 'include',
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
