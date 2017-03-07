const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const root = require('./helpers').root;
const VERSION = JSON.stringify(require('../package.json').version);

let baseConfig = {
  devtool: 'cheap-source-map',

  performance: {
    hints: false
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.svg'],
    alias: {
      'ejs': 'ejs/ejs.min.js'
    }
  },
  externals: {
    'react':'React',
    'react-dom': 'ReactDOM'
  },
  entry: {
    'voyager': ['./src/vendor.ts', './src/index.ts']
  },
  output: {
    path: root('dist'),
    filename: '[name].js',
    sourceMapFilename: '[file].map',
    library: 'GraphQLVoyager',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
    {
      test: /\.tsx?$/,
      use: [
        'awesome-typescript-loader'
      ],
      exclude: [/\.(spec|e2e)\.ts$/]
    },
    {
      test: /\.worker.js$/,
      use: {
        loader: 'worker-loader',
        options: {
          name: 'voyager.worker.js'
        }
      }
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              minimize: true
            },
          },
          'postcss-loader?sourceMap'
        ]
      }),
      exclude: [/(react-toolbox\/.*\.css$|\.theme.css$)/]
    },
    {
      test: /(react-toolbox\/.*\.css$|\.theme.css$)/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            query: {
              sourceMap: true,
              modules: true,
              minimize: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]-[hash:base64:5]'
            },
          },
          'postcss-loader?sourceMap'
        ]
      })
    },
    {
      test: /\.json$/,
      use: 'json-loader'
    },
    {
      test: /\.ejs$/,
      loader: 'ejs-compiled-loader'
    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            plugins: ['transform-es2015-classes', 'transform-es2015-block-scoping']
          }
        },
        {
          loader: 'react-svg-loader',
          options: {
            jsx: false,
            svgo: {
              plugins: [{mergePaths: false}]
            }
          }
        }
      ]
    }]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),

    new webpack.DefinePlugin({
      'VERSION': VERSION,
      'DEBUG': false,
      'DEBUG_INITIAL_PRESET': false
    }),

    new ExtractTextPlugin({
      filename: 'voyager.css',
      allChunks: true
    })
  ],
  node: {
    console: false,
    global: false,
    process: 'mock',
    Buffer: false,
    fs: true,
    global: true,

    crypto: 'empty',
    fs: 'empty',
    path: true,
    clearImmediate: false,
    setImmediate: false
  }
}

let minConfig = Object.assign({}, baseConfig);
minConfig.output = {
  path: root('dist'),
  filename: '[name].min.js',
  sourceMapFilename: '[file].map',
  library: 'GraphQLVoyager',
  libraryTarget: 'umd',
  umdNamedDefine: true
};

minConfig.plugins = minConfig.plugins.slice();
minConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false,
    screw_ie8: true
  },
  sourceMap: true
}));

module.exports = [baseConfig, minConfig];
