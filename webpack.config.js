const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default;

module.exports = {
  mode: 'development',
  entry: {
    home: path.resolve(__dirname, 'src/pages/home/home.js'),
    detail: path.resolve(__dirname, 'src/pages/detail/detail.js')
  },  
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: '[name][ext]',
    clean:true
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 5002,
    open: true,
    hot: true,
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      filename: 'home.html', 
      template: path.resolve(__dirname, 'src/pages/home/home.pug'),
      // template: path.resolve(__dirname, 'src/template/main.html'),
      chunks:['home']
    }),
    new HtmlWebpackPlugin({
      filename: 'detail.html',
      template: path.resolve(__dirname, 'src/template/main.html'),
      chunks:['detail']
    }),
    new HTMLInlineCSSWebpackPlugin(),
  ],
  module: {
    rules: [      
      { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: 'asset/resource' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },                 
      {
        test: /\.s[c|a]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
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
      { test: /\.pug$/, loader: 'pug-loader' }   
    ]
  }  
};