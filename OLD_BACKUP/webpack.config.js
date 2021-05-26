const path = require('path');
const mainCSS = require('mini-css-extract-plugin');

const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: './src/builds/main.js',
    //tailwind: './src/builds/tailwind.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs/dist'),
  },
  plugins: [
    new mainCSS({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'ctti.css',
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/tools", to: "../tools/" },
        { from: "./src/_redirects", to: "../" },
        { from: "./src/netlify.toml", to: "../" },
        { from: "./src/css/tailwind.css", to: "./" },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: mainCSS.loader,
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
  },
  externals: {
    jquery: 'jQuery',
    vue: 'Vue',
  }
};