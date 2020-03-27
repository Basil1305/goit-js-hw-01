const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => ({
  devtool: "cheap-eval-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    compress: true,
    noInfo: true,
    quiet: true,
    clientLogLevel: "error",
    stats: "errors-only",
    open: true
  }
});
