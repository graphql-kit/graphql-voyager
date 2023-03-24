const path = require('node:path');

const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-source-map',

  performance: {
    hints: false,
  },
  devServer: {
    https: true,
    port: 9090,
    static: {
      directory: __dirname,
    },
    liveReload: true,
  },
  stats: 'errors-only',
  resolve: {
    extensions: ['.ts', '.tsx', '.mjs', '.js', '.json', '.css', '.svg'],
  },
  entry: ['./index.jsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    sourceMapFilename: '[file].map',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/env', '@babel/react'],
        },
      },
    ],
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
  ],
};
