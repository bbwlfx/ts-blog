const clientConfig = require('./webpack.client.config');
const webpack = require('webpack');
const merge = require('webpack-merge');
const WriteFilePlugin = require('write-file-webpack-plugin');
module.exports = merge(clientConfig, {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    hot: true,
    inline: false,
    port: 4001,
    disableHostCheck: true,
    historyApiFallback: true
  },
  plugins: [
    new WriteFilePlugin()
  ]
});