import * as path from 'node:path';

import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as webpack from 'webpack';
import * as NodeExternals from 'webpack-node-externals';

const packageJSON = require('./package.json');
const BANNER = `GraphQL Voyager - Represent any GraphQL API as an interactive graph
-------------------------------------------------------------
  Version: ${packageJSON.version}
  Repo: ${packageJSON.repository.url}`;

interface Env {
  lib?: boolean;
  standalone?: boolean;
}

// FIXME: switch any to webpack.Configuration
export default function buildWebpackConfig(env: Env): any {
  if (env.lib === true) {
    return {
      ...baseConfig,
      entry: './src/index.ts',
      externals: NodeExternals(),
      output: {
        ...baseConfig.output,
        filename: 'voyager.lib.js',
      },
    };
  }

  if (env.standalone === true) {
    return {
      ...baseConfig,
      entry: './src/standalone.ts',
      optimization: { minimize: true },
      externals: undefined,
      devtool: 'source-map',
      output: {
        ...baseConfig.output,
        filename: 'voyager.standalone.js',
        sourceMapFilename: '[file].map',
      },
      devServer: {
        https: true,
        port: 9090,
        static: {
          directory: path.join(__dirname, 'demo'),
        },
        liveReload: true,
      },
    };
  }

  throw new Error('Please specify correct env');
}

const baseConfig: webpack.Configuration = {
  performance: {
    hints: false,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.mjs', '.js', '.json', '.css', '.svg'],
    alias: { '../../worker': '../../worker-dist' },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
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
