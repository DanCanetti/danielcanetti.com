// Monetize 
const monetize11ty = require("eleventy-plugin-monetization");
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin( monetize11ty )
};

// Plugin RSS
const pluginRss = require("@11ty/eleventy-plugin-rss");
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
};