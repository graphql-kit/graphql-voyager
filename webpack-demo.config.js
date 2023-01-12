const path = require('node:path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function () {
  return {
    performance: {
      hints: false,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.mjs', '.js', '.json', '.css', '.svg'],
    },
    entry: './demo/index.tsx',
    devServer: {
      https: true,
      port: 9090,
      static: {
        directory: path.resolve(__dirname, '../demo'),
      },
      liveReload: true,
    },
    stats: 'errors-only',
    output: {
      path: path.resolve(__dirname, 'demo-dist'),
      filename: '[name].js',
      sourceMapFilename: '[name].[id].map',
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
      new webpack.LoaderOptionsPlugin({
        worker: {
          output: {
            filename: '[name].worker.js',
          },
        },
      }),

      new HtmlWebpackPlugin({
        template: './demo/index.html',
      }),

      new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),

      new CopyWebpackPlugin({
        patterns: [
          { from: '.nojekyll', context: './demo' },
          { from: '**/*.png', context: './demo' },
          { from: '**/*.ico', context: './demo' },
        ],
      }),
    ],
  };
};
