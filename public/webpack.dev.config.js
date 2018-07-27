const baseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const WriteFilePlugin = require('write-file-webpack-plugin');
module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    hot: false,
    inline: false,
    port: 4001,
    disableHostCheck: true,
    historyApiFallback: true
  },
  plugins: [new WriteFilePlugin()]
});