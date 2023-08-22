const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    contact: "./src/contact.js",
    content: "./src/content.js",
    footer: "./src/footer.js",
    header: "./src/header.js",
    home: "./src/home.js",
    index: "./src/index.js",
    juiceRecipe: "./src/juiceRecipe.js",
    menu: "./src/menu.js",
    router: "./src/router.js",
    savory: "./src/savory.js",
  },
  // devtool: "inline-source-map",
  devtool:false,
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Restaurant Project",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  performance: {
    hints: false,
    maxAssetSize: 10000000
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
