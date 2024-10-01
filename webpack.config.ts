import 'webpack-dev-server';

import * as path from 'node:path';

import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as webpack from 'webpack';
import { ExternalItemFunctionData } from 'webpack';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const packageJSON = require('./package.json');
const BANNER = `GraphQL Voyager - Represent any GraphQL API as an interactive graph
-------------------------------------------------------------
  Version: ${packageJSON.version}
  Repo: ${packageJSON.repository.url}`;

const baseConfig: webpack.Configuration = {
  devtool: 'source-map',
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
        resourceQuery: /raw/,
        type: 'asset/source',
      },
      {
        test: /\.svg$/,
        issuer: /\.tsx?$/,
        resourceQuery: { not: [/raw/] },
        use: [
          {
            loader: '@svgr/webpack',
            options: { typescript: true, ext: 'tsx' },
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'voyager.css',
    }),

    new webpack.BannerPlugin({
      banner: BANNER,
      stage: webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT,
    }),
  ],
};

const config: Array<webpack.Configuration> = [
  {
    ...baseConfig,
    entry: './src/index.ts',
    externalsType: 'commonjs',
    externals: ({ request }: ExternalItemFunctionData) =>
      Promise.resolve(
        [
          ...Object.keys(packageJSON.peerDependencies),
          ...Object.keys(packageJSON.dependencies),
        ].some((pkg) => request === pkg || request?.startsWith(pkg + '/')),
      ),
    output: {
      ...baseConfig.output,
      filename: 'voyager.lib.js',
    },
  },
  {
    ...baseConfig,
    entry: './src/standalone.ts',
    optimization: { minimize: true },
    externals: undefined,
    output: {
      ...baseConfig.output,
      filename: 'voyager.standalone.js',
      sourceMapFilename: '[file].map',
    },
    devServer: {
      port: 9090,
      static: {
        directory: path.join(__dirname, 'demo'),
      },
      liveReload: true,
    },
  },
];
export default config;
