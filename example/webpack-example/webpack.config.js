const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const root = require('../../build/helpers').root;

module.exports = {
  devtool: 'cheap-source-map',

  performance: {
    hints: false
  },
  devServer: {
    contentBase: root('example/webpack-example/'),
    watchContentBase: true,
    port: 9090,
    stats: 'errors-only'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },
  entry: ['./index.jsx'],
  output: {
    path: root('example/webpack-example/dist'),
    filename: 'main.js',
    sourceMapFilename: '[file].map'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new CopyWebpackPlugin([
      { from: './node_modules/graphql-voyager/dist/voyager.worker.js' }
    ])
  ]
}
