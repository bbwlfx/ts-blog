const baseConfig = require("./webpack.base.config");
const merge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const outputDir = path.resolve(__dirname, "../src/public/buildServer/");
const ssrConfig = merge(baseConfig, {
  output: {
    path: outputDir,
    filename: "[name].js",
    libraryTarget: "commonjs2"
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "[name].css",
      allChunks: true
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new cleanWebpackPlugin(outputDir),
    new webpack.DefinePlugin({
      IS_NODE: true
    })
  ],
  externals: [nodeExternals()],
  target: "node",
  node: {
    __filename: true,
    __dirname: true
  }
});

module.exports = ssrConfig;
