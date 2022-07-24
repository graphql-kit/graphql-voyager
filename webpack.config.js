/* eslint-disable */
const path = require('node:path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals')({
  whitelist: ['viz.js/full.render.js'],
});

const packageJSON = require('./package.json');
const BANNER = `GraphQL Voyager - Represent any GraphQL API as an interactive graph
-------------------------------------------------------------
  Version: ${packageJSON.version}
  Repo: ${packageJSON.repository.url}`;

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
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
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
        use: {
          loader: 'ts-loader',
          options: { compilerOptions: { noEmit: false } },
        },
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
    new ExtractTextPlugin({
      filename: 'voyager.css',
      allChunks: true,
    }),

    new webpack.BannerPlugin(BANNER),
  ],
});
