const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  target: "web",
  devServer: {
    port: "8081",
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: false,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".scss"],
    alias: {
      src: path.resolve(__dirname, "src/"),
      components: path.resolve(__dirname, "src/components"),
      model: path.resolve(__dirname, "src/model"),
      partials: path.resolve(__dirname, "src/partials"),
      store: path.resolve(__dirname, "src/store"),
      routes: path.resolve(__dirname, "src/routes"),
      assets: path.resolve(__dirname, "src/assets"),
      utils: path.resolve(__dirname, "src/utils"),
      data: path.resolve(__dirname, "src/data"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ["file-loader?name=[name].[ext]"], // ?name=[name].[ext] is only necessary to preserve the original file name
      },
      {
        test: /\.(s[ac]ss|less)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
