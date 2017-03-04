const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const root = require('./helpers').root;
const VERSION = JSON.stringify(require('../package.json').version);
const IS_PRODUCTION = process.env.NODE_ENV === "production";

module.exports = function() {
  return {
    devtool: IS_PRODUCTION ? false : '#inline-source-map',

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
    externals: {
      'react':'React',
      'react-dom': 'ReactDOM'
    },
    entry: IS_PRODUCTION ? {
      'index': ['./lib/vendor.ts', './lib/index.ts']
    } : {
      'index': './lib/index.ts',
      'vendor': './lib/vendor.ts'
    },
    devServer: {
      contentBase: root('demo'),
      watchContentBase: true,
      port: 9090,
      stats: 'errors-only',
      hot: true
    },
    output: {
      path: root('dist'),
      filename: IS_PRODUCTION ? '[hash].[name].js' : '[name].js',
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
        use: 'worker-loader'
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
        use: 'raw-loader'
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
      new webpack.HotModuleReplacementPlugin(),

      new webpack.optimize.CommonsChunkPlugin({
        name: IS_PRODUCTION ? 'index' : 'vendor',
        minChunks: Infinity
      }),

      new webpack.DefinePlugin({
        'VERSION': VERSION,
        'DEBUG': !!IS_PRODUCTION,
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
      path: 'empty',
      clearImmediate: false,
      setImmediate: false
    }
  }
};
