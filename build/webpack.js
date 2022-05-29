const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals')({
  allowlist: ['viz.js/full.render.js'],
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
    fallback: { path: require.resolve('path-browserify') },
    alias: {
      clipboard: 'clipboard/dist/clipboard.min.js',
    },
  },

  devServer: {
    static: { 
      directory: path.resolve(__dirname, '../demo'), 
      publicPath: '/'
    },
  },

  externals: env.lib
    ? nodeExternals
    : {},

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
        test: /\.css$/i,
        exclude: /variables\.css$/,
        use: [MiniCssExtractPlugin.loader, 
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          { loader: "postcss-loader", options: { sourceMap: true } },
        ],
      },
      {
        test: /variables\.css$/,
        use: [
          {
            loader: 'postcss-variables-loader?es5=1',
          },
        ],
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

    new MiniCssExtractPlugin({ filename: 'voyager.css' }),

    new webpack.BannerPlugin(BANNER),
  ],
});
