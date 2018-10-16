const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = require("../src/config");
const entry = require("./js/scripts/get_entry");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry,
  context: __dirname,
  output: {
    path: path.resolve(__dirname, "../src/public"),
    publicPath: `${config.webpack.publicPath}/static/`,
    filename: "[name].js",
    chunkFilename: "chunk.[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            {
              loader: "less-loader",
              options: {
                modifyVars: {
                  "primary-color": "#1DA57A"
                },
                javascriptEnabled: true
              }
            }
          ]
        })
      },
      {
        test: /\.md$/,
        use: ["raw-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "[name].css",
      allChunks: true
    })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"]
  }
};
