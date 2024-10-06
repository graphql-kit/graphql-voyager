const path = require('node:path');

module.exports = {
  devServer: {
    port: 9090,
    allowedHosts: 'all',
    static: { directory: __dirname },
    // needed to prevent info messages during integration tests
    client: { logging: 'warn' },
  },
  // disable hints since Voyager is too big :(
  performance: { hints: false },
  resolve: {
    extensions: ['.mjs', '.ts', '.tsx', '.js'],
  },
  entry: ['./index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: { compilerOptions: { noEmit: false } },
        },
        exclude: /node_modules/,
      },
    ],
  },
};
