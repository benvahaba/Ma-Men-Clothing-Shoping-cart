const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", //production
  entry: {
    main: path.resolve(__dirname, "src/controller.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "[name][ext]",
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 5001, //default 8080
    open: true,
    hot: true,
  },
  //loaders
  module: {
    rules: [
      //css
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      //images
      {
        test: /\.(svg|ico|png|webp|jpg|gif|jpeg|txt)$/,
        type: "asset/resource",
      },
      //js for babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: "Just a Demo",
      filename: "index.html",
      template: path.resolve(__dirname, "src/template.html"),
    }),
  ],
};
