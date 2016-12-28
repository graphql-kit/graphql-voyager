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
    extensions: ['.ts', '.tsx', '.js', '.json', '.css'],
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
    stats: 'errors-only'
  },
  output: {
    path: root('dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].[id].map',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      loader: 'source-map-loader',
      exclude: [
        /node_modules/
      ]
    }, {
      test: /\.tsx?$/,
      loaders: [
        'awesome-typescript-loader'
      ],
      exclude: [/\.(spec|e2e)\.ts$/]
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader?importLoaders=1', 'postcss-loader']
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.ejs$/,
      loader: 'raw-loader'
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
    })
  ],
}
