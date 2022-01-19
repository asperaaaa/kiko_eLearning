const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  new HtmlWebpackPlugin({
    title: 'Just a Demo',
    filename: 'index.html',
    template: path.resolve(__dirname, '../src/pages/home/home.html'),
  })
];