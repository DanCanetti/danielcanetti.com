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
        { from: "./src/blog/index.html", to: "../docs/blog/" },
        { from: "./src/blog/year-in-review-2020/index.html", to: "../docs/blog/year-in-review-2020/" },
        { from: "./src/tools/index.html", to: "../docs/tools/" },
        { from: "./src/about/index.html", to: "../docs/about/" },
        { from: "./src/files/Sage_CRM_Product_Specialist_2021.pdf", to: "../docs/files/" },
        { from: "./src/images/cert.svg", to: "../docs/images/" },
        { from: "./src/images/icons/arrow.svg", to: "../docs/images/" },
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