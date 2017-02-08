const webpack = require('webpack');

const root = require('./helpers').root;
const VERSION = JSON.stringify(require('../package.json').version);
const IS_PRODUCTION = process.env.NODE_ENV === "production";
// TODO Refactor common parts of config

module.exports = {
  devtool: '#inline-source-map',

  performance: {
    hints: false
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.svg'],
    alias: {
      'ejs': 'ejs/ejs.min.js'
    }
  },
  node: {
    fs: "empty"
  },
  entry: {
    'index': './lib/index.ts',
    'vendor': './lib/vendor.ts'
  },
  devServer: {
    contentBase: root('static'),
    watchContentBase: true,
    port: 9090,
    stats: 'errors-only',
    hot: true
  },
  output: {
    path: root('dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].[id].map',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    rules: [
    {
      enforce: 'pre',
      test: /\.js$/,
      use: 'source-map-loader',
      exclude: [
        /node_modules/
      ]
    },
    {
      test: /\.tsx?$/,
      use: [
        'awesome-typescript-loader'
      ],
      exclude: [/\.(spec|e2e)\.ts$/]
    },
    {
      test: /\.worker.js$/,
      use: 'worker-loader'
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader?importLoaders=1']
    },
    {
      test: /\.json$/,
      use: 'json-loader'
    },
    {
      test: /\.ejs$/,
      use: 'raw-loader'
    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: 'react-svg-loader',
          options: {
            jsx: false
          }
        }
      ]
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor'],
      minChunks: Infinity
    }),

    new webpack.DefinePlugin({
      'VERSION': VERSION,
      'DEBUG_INITIAL_PRESET': '"github"'
    })
  ]
}
