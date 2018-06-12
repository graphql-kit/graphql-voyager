const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const root = require('./helpers').root;
const VERSION = JSON.stringify(require('../package.json').version);
const IS_PRODUCTION = process.env.NODE_ENV === "production";

module.exports = function() {
  return {
    devtool: IS_PRODUCTION ? 'cheap-source-map' : '#inline-source-map',

    performance: {
      hints: false
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.svg']
    },
    externals: {
      'react':'React',
      'react-dom': 'ReactDOM'
    },
    entry: ['./src/presets.ts', './src/vendor.ts', './src/index.tsx'],
    devServer: {
      contentBase: root('demo'),
      watchContentBase: true,
      port: 9090,
      stats: 'errors-only',
      hot: true
    },
    output: {
      path: root('demo-dist'),
      filename: '[name].js',
      sourceMapFilename: '[name].[id].map',
      chunkFilename: '[id].chunk.js',
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
                sourceMap: true
              },
            },
            'postcss-loader'
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
                importLoaders: 1,
                localIdentName: '[name]_[local]-[hash:base64:5]'
              },
            },
            'postcss-loader'
          ]
          //use: ['css-loader?sourceMap&modules&importLoaders=1', 'postcss-loader']
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
      }]
    },

    plugins: [
      new webpack.LoaderOptionsPlugin({
        worker: {
          output: {
            filename: "[name].worker.js"
          }
        }
      }),

      new webpack.HotModuleReplacementPlugin(),

      new webpack.optimize.CommonsChunkPlugin({
        name: IS_PRODUCTION ? 'index' : 'vendor',
        minChunks: Infinity
      }),

      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'VERSION': VERSION,
        'DEBUG': !IS_PRODUCTION,
        'DEBUG_INITIAL_PRESET': IS_PRODUCTION ? 'false': '"Star Wars"'
      }),

      new HtmlWebpackPlugin({
        template: './demo/index.html'
      }),

      new ExtractTextPlugin({
        disable: !IS_PRODUCTION,
        filename: 'main.css'
      }),

      new CopyWebpackPlugin([
        { from: '**/*.png', context: './demo' },
        { from: '**/*.ico', context: './demo' }
      ])
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
};
