const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  entry: [
    path.resolve('./js_source/main.js'),
    path.resolve('./scss/main.scss')],
  output:{
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve('./src'),
    watchContentBase: true,
    hot: true,
    inline: true,
    progress: true
  },
  watch: true,
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!resolve-url-loader!sass-loader?sourceMap",
          publicPath: "/dist"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.min.css',
      disable: true,
      allChunks: true
    }),
    new HtmlWebpackPlugin ({
      template: './src/index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}