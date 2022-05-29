const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals')({
  whitelist: ['viz.js/full.render.js'],
});

const root = require('./helpers').root;
const VERSION = JSON.stringify(require('../package.json').version);

const BANNER = `GraphQL Voyager - Represent any GraphQL API as an interactive graph
-------------------------------------------------------------
  Version: ${VERSION}
  Repo: https://github.com/APIs-guru/graphql-voyager`;

module.exports = (env = {}, { mode }) => ({
  performance: {
    hints: false,
  },

  optimization: {
    minimize: !env.lib,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.mjs', '.js', '.json', '.css', '.svg'],
  },

  externals: env.lib
    ? nodeExternals
    : {
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react',
        },
        'react-dom': {
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom',
          amd: 'react-dom',
        },
      },
  entry: ['./src/polyfills.ts', './src/index.tsx'],
  output: {
    path: root('dist'),
    filename: env.lib ? 'voyager.lib.js' : 'voyager.min.js',
    sourceMapFilename: '[file].map',
    library: 'GraphQLVoyager',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/\.(spec|e2e)\.ts$/],
      },
      {
        test: /\.render\.js$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'voyager.worker.js',
            },
          },
        ],
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
              },
            },
            'postcss-loader?sourceMap',
          ],
        }),
        exclude: /variables\.css$/,
      },
      {
        test: /variables\.css$/,
        loader: 'postcss-variables-loader?es5=1',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'react-svg-loader',
            options: {
              jsx: false,
              svgo: {
                plugins: [{ mergePaths: false }],
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      VERSION: VERSION,
    }),

    new ExtractTextPlugin({
      filename: 'voyager.css',
      allChunks: true,
    }),

    new webpack.BannerPlugin(BANNER),
  ],
});
