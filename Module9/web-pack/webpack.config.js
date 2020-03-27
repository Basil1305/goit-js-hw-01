const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpackMerge = require("webpack-merge");
const modeConfig = env => require(`./build-utils/${env.mode}.config`)(env);
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const WebpackBar = require("webpackbar");

module.exports = env =>
  webpackMerge(
    {
      entry: "./src/index.js",
      output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
      },
      module: {
        rules: [
          {
            test: /\.(png|jpg|gif|svg)$/i,
            use: [
              {
                loader: "url-loader",
                options: {
                  name: "[path]/[name].[ext]",
                  limit: 8192
                }
              }
            ]
          },
          {
            test: /\.html$/,
            loader: "html-loader",
            options: {
              esModule: true
            }
          },
          { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
          { test: /\.hbs$/, use: "handlebars-loader" }
        ]
      },
      plugins: [
        new CleanWebpackPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new WebpackBar()
      ]
    },
    modeConfig(env)
  );
