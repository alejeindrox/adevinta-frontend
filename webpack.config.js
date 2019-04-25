const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const entryApp = './src/index.js';

const outputPath = 'docs';
const outputFilename = 'js/app.bundle.js';

const htmlTemplate = './src/index.html';
const htmlFilename = 'index.html';

const cssFilename = 'css/app.bundle.css';

module.exports = {

  entry: {
    app: [
      '@babel/polyfill',
      entryApp,
    ],
  },

  output: {
    path: path.resolve(__dirname, outputPath),
    filename: outputFilename,
  },

  devServer: {
    port: 3000,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: htmlTemplate,
      filename: htmlFilename,
      minify: {
        collapseWhitespace: true,
        RemoveComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: cssFilename,
    }),
  ],

};
