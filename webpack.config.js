var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const autoprefixer = require('autoprefixer')
require('sass-loader')

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'dist/bundle.js'
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
    modulesDirectories: ['src', 'node_modules'],
  },
  module: {
    loaders: [
      { 
        test: /\.tsx?$/, loaders: ['babel', 'ts-loader'] 
      },
      {
        test: /\.scss?$/,
        loader: ExtractTextPlugin.extract( 'css-loader!postcss-loader!sass-loader')
      }
    ]
  },
  postcss: [
    autoprefixer({
      browsers: ['last 3 versions']
    })
  ],
  plugins: [
    new WebpackNotifierPlugin({ alwaysNotify: true }),
    new ExtractTextPlugin('dist/css/style.css', {
      allChunks: true
    })
  ]
};