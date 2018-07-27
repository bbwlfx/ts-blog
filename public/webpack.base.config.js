const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const entry = require('./js/scripts/get_entry'); 
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry,
  context: __dirname,
  output: {
    path: path.resolve(__dirname, '../dist/public'),
    publicPath: '/static/',
    filename: '[name].js',
    chunkFilename: 'chunk.[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(css|sass)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.md$/,
        use: ['raw-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    alias: {
      components: path.resolve(__dirname, './js/components'),
      containers: path.resolve(__dirname, './js/containers'),
      models: path.resolve(__dirname, './js/models'),
      decorators: path.resolve(__dirname, './js/decorators')
    }
  }
}