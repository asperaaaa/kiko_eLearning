const path = require('path');
const plugins = require('./webpack.plugins');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, '../src/pages/home/home.js')
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    assetModuleFilename: '[name][ext]',
    clean:true
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, '../dist'),
    port: 5002,
    open: true,
    hot: true,
  },
  module: {
    rules: [      
      { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: 'asset/resource' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },      
      {
        test: /\.s[c|a]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins
};