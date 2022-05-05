const moment = require('moment')

module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/_includes/styles/tailwind.css')
  eleventyConfig.addPassthroughCopy({ './src/_includes/static': 'static' })
  eleventyConfig.addFilter('dateIso', date => {
    return moment(date).toISOString();
  });
 
  eleventyConfig.addFilter('dateReadable', date => {
    return moment(date).utc().format('LL'); // E.g. May 31, 2019
  })

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "dist"
    },
  };
};
