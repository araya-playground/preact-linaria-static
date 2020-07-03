const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
/** @type {import('webpack').Configuration} */
const isDev = process.env.NODE_ENV !== "production";
const config = {
  mode: isDev ? "development" : "production",
  entry: path.resolve(__dirname, "src/index.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          },
          {
            loader: "linaria/loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: "style.css" })],
};

module.exports = config;
