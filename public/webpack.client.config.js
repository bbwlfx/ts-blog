const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const { ReactLoadablePlugin } = require("react-loadable/webpack");
const outputDir = path.resolve(__dirname, "../src/public/buildPublic");
const ManifestPlugin = require("webpack-manifest-plugin");
module.exports = merge(baseConfig, {
  output: {
    path: outputDir
  },
  plugins: [
    new ManifestPlugin(),
    new webpack.DefinePlugin({
      IS_NODE: false,
      __CLIENT__: true
    }),
    new ReactLoadablePlugin({
      filename: path.resolve(outputDir, "react-loadable.json")
    })
  ]
});
