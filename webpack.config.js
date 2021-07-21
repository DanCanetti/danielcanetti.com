const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

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
    new CopyPlugin({
      patterns: [
        { from: "./src/index.html", to: "../docs/" },
        { from: "./src/404.html", to: "../docs/" },
        { from: "./src/awesome-sites.html", to: "../docs/" },
        { from: "./src/blog.html", to: "../docs/" },
      ],
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