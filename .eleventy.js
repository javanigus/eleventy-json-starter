module.exports = function(eleventyConfig) {
    const inspect = require("util").inspect;
	
    eleventyConfig.addPassthroughCopy("src", {
		//debug: true,
		filter: [
			"404.html",
			"**/*.css",
			"**/*.js",
			"**/*.json",
			"!**/*.11ty.js",
			"!**/*.11tydata.js",
            "!**/*.11tydata.json",
		]
	});
  
	// Copy img folder
	eleventyConfig.addPassthroughCopy("src/img");

	eleventyConfig.setServerPassthroughCopyBehavior("copy");

    eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`);

	// tell 11ty which files to process and which files to copy while maintaining directory structure
	// eleventyConfig.setTemplateFormats(["md","html","njk"]);

	return {
		dir: {
			input: "src",
			output: "dist",
			// ⚠️ These values are both relative to your input directory.
			includes: "_includes",
			layouts: "_layouts",
		}
	}
};