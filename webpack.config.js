var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    publicPath: '/dist',
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
    modulesDirectories: ['src', 'node_modules'],
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loaders: ['babel', 'ts-loader'] }
    ]
  },
   plugins: [
    new WebpackNotifierPlugin({ alwaysNotify: true }),
  ]
};