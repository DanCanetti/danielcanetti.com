const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'ctti.js',
    path: path.resolve(__dirname, 'docs'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'ctti.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./"
            },
          },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: 'compressed',
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|ico|mp4)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
          name: '[name].[ext]',
        },
      },
    ],
  }
};