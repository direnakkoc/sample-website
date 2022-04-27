module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/_includes/styles/tailwind.css')
  eleventyConfig.addPassthroughCopy({ './src/_includes/static': 'static' })
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "dist"
    },
  };
};
