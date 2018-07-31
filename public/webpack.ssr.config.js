const baseConfig = require("./webpack.base.config");
const merge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const { ReactLoadablePlugin } = require("react-loadable/webpack");
const outputDir = path.resolve(__dirname, "../dist/server/");
const ssrConfig = merge(baseConfig, {
  output: {
    path: outputDir,
    filename: "[name].js",
    libraryTarget: "commonjs2"
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new cleanWebpackPlugin(outputDir),
    new webpack.DefinePlugin({
      IS_NODE: true
    })
  ],
  target: "node",
  node: {
    __filename: true,
    __dirname: true
  }
});

module.exports = ssrConfig;
