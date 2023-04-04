import * as path from 'node:path';

import * as webpack from 'webpack';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as NodeExternals from 'webpack-node-externals';

const packageJSON = require('./package.json');
const BANNER = `GraphQL Voyager - Represent any GraphQL API as an interactive graph
-------------------------------------------------------------
  Version: ${packageJSON.version}
  Repo: ${packageJSON.repository.url}`;

interface Env {
  lib?: boolean;
}

export default function buildWebpackConfig(env: Env): webpack.Configuration {
  return {
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
      ? NodeExternals()
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
          use: {
            loader: 'css-loader',

            options: {
              modules: {
                mode: 'icss',
              },
              sourceMap: true,
            },
          },
        },
        {
          test: /\.svg$/,
          issuer: /\.tsx?$/,
          use: [{ loader: '@svgr/webpack' }],
        },
      ],
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: 'voyager.css',
      }),

      new webpack.BannerPlugin(BANNER),
    ],
  };
}
