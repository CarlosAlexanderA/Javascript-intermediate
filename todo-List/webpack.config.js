const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("node:path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })],
  devtool: "source-map", //ayuda en encontrar errores, pero es lenta y proporciona el codigo fuente al usuario
  devServer: {
    open: true, //abrir el navergador
    port: 3100, // puerto de carga
  },
};
