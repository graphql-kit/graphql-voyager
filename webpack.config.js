const path = require('node:path');

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals')();

const packageJSON = require('./package.json');
const BANNER = `GraphQL Voyager - Represent any GraphQL API as an interactive graph
-------------------------------------------------------------
  Version: ${packageJSON.version}
  Repo: ${packageJSON.repository.url}`;

module.exports = (env = {}) => ({
  performance: {
    hints: false,
  },

  optimization: {
    minimize: !env.lib,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.mjs', '.js', '.json', '.css', '.svg'],
    alias: { '../../worker': '../../worker-dist' },
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
        test: /\.css$/,
        exclude: /variables\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /variables\.css$/,
        use: [{ loader: 'postcss-variables-loader?es5=1' }],
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
    new MiniCssExtractPlugin({
      filename: 'voyager.css',
    }),

    new webpack.BannerPlugin(BANNER),
  ],
});
