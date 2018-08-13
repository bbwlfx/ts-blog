const merge = require("webpack-merge");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const baseConfig = require("./webpack.client.config");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = merge(baseConfig, {
  mode: "production",
  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "chunk.[name].[chunkhash].js"
  },
  plugins: [
    new cleanWebpackPlugin("../src/public"),
    new ExtractTextPlugin({
      filename: "[name].[chunkhash].css",
      allChunks: true
    })
  ]
});
