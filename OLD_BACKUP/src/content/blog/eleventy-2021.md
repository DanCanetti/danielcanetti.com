---
postTitle: A 2021 guide to Eleventy
#date: Last Modified
date: 2021-03-13
postTag: Web Development
postFeatureImageThumb: /dist/images/acompleteguidetoeleventythumb.jpg
postFeatureImage: /dist/images/acompleteguidetoeleventy.jpg
postFeatureImageRetina: /dist/images/acompleteguidetoeleventy@2x.jpg
postExcerpt: A follow-up to my 2019 article, A complete guide to Eleventy, with updates about webpack and my boilerplate.
eleventyExcludeFromCollections: true
---

This is a follow-up to my 2019 article, [A complete guide to Eleventy](/blog/a-complete-guide-to-eleventy/). Since then I've integrated webpack and created a boilerplate to help people get started with Eleventy in 2021, which I'll breakdown here so we can really understand what is going on.

## The boilerplate

The boilerplate can be found [here](https://github.com/DanCanetti/eleventy-boilerplate), a blank version [here](https://github.com/DanCanetti/eleventy-boilerplate-blank), and the demo is at [thisboilerplate.rocks](https://thisboilerplate.rocks/). 

## Eleventy Config

Our eleventy site is configured in the `eleventy.js` file.

```
const recentChanges = require('eleventy-plugin-recent-changes');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(recentChanges, {
    commits: 30, // The maxmium number of commits to add to the collection, before filtering.
  });

  return {
    dir: {
      output: "docs",
      input: "src/content"
  }
  };
};
```

In this example, we're adding the eleventy-plugin-recent-changes plugin config which is not actually used by default on the boilerplate, but is used [here](/changelog/). It's included as a starting point for anyone wanting to add config for a plugin.

We're also declaring that the site should be output to `docs` rather than the default `_site` dir and we're telling eleventy to compile from the `src/content` dir. 

## Webpack

For those who are unsure [webpack](https://webpack.js.org/) is a bundler built primarily for JS but which can be used for a variety of other tooling such as image bundling and css pre-processing.

Let's take a look at the complete `webpack.config.js` file and then work through it.

```
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs/dist'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'boilerplate.css',
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
              publicPath: (resourcePath, context) => {
                // publicPath is the relative path of the resource to the context
                // e.g. for ./css/admin/main.css the publicPath will be ../../
                // while for ./css/main.css the publicPath will be ../
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
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
        test: /\.(png|svg|jpg|gif|ico)$/,
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
```