const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  // output: {
  //   path: path.resolve(__dirname, "dist"),
  //   filename: "bundle.js",
  //   clean: true,
  // },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/", // Ensure paths work properly
    clean: true,
  },  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // Injects styles into DOM
          "css-loader",   // Turns CSS into CommonJS
          "sass-loader"   // Compiles Sass to CSS
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|jpg)$/i,
        type: "asset/resource",
      }
      
    ],
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "./public/index.html",
  //   }),
  // ],
  devServer: {
    static: "./dist",
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  mode: "development",
};
