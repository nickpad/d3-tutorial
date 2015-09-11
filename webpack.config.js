/* eslint es6:false */

module.exports = {
  entry: {
    app: "./app/main.js",
    html: "./app/index.html"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel"
      },
      {
        test: /\.html/,
        loader: "file?name=[name].[ext]"
      }
    ]
  },
  devtool: "#source-map"
};
