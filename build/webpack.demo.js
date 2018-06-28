const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const root = require('./helpers').root;
const VERSION = JSON.stringify(require('../package.json').version);

module.exports = function(_, { mode }) {
  return {
    performance: {
      hints: false,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.mjs', '.js', '.json', '.css', '.svg'],
    },
    entry: ['./src/vendor.ts', './demo/index.tsx'],
    devServer: {
      contentBase: root('demo'),
      watchContentBase: true,
      port: 9090,
      stats: 'errors-only',
    },
    output: {
      path: root('demo-dist'),
      filename: '[name].js',
      sourceMapFilename: '[name].[id].map',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'awesome-typescript-loader',
          exclude: [/\.(spec|e2e)\.ts$/],
        },
        {
          test: /\.render\.js$/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'voyager.worker.js',
            },
          },
        },
        {
          test: /\.css$/,
          exclude: /variables\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
              'postcss-loader',
            ],
          }),
        },
        {
          test: /variables\.css$/,
          loader: 'postcss-variables-loader?es5=1',
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                plugins: [
                  'transform-es2015-classes',
                  'transform-es2015-block-scoping',
                  'transform-es2015-arrow-functions',
                  'transform-es2015-destructuring'
                ]
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
        },
      ],
    },

    plugins: [
      new webpack.LoaderOptionsPlugin({
        worker: {
          output: {
            filename: '[name].worker.js',
          },
        },
      }),

      new webpack.DefinePlugin({
        VERSION: VERSION,
      }),

      new HtmlWebpackPlugin({
        template: './demo/index.html',
      }),

      new ExtractTextPlugin({
        filename: '[name].[hash].css',
      }),

      new CopyWebpackPlugin([
        { from: '**/*.png', context: './demo' },
        { from: '**/*.ico', context: './demo' },
      ]),
    ],
  };
};
