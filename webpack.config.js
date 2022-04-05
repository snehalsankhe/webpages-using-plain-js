const path = require('path');
const { CleanWebpackPlugin } =require('clean-webpack-plugin');
const MiniCssExtractPlugin  =  require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader' 
        ]
      },
    ],
  },
  mode: 'none',
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename:'../css/style.[contenthash].css'
    }),
    new HtmlWebpackPlugin({ template: './index.html' })
  ],
};

module.exports = config 