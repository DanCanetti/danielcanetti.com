const pluginRss = require("@11ty/eleventy-plugin-rss");
const monetize11ty = require("eleventy-plugin-monetization");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(monetize11ty);
};