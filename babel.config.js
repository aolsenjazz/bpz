const path = require('path')

module.exports = function (api) {
	api.cache(true);

	const presets = ["@react-ssr/express/babel"];
	const plugins = [["module-resolver",{"alias": {
		"@Components": path.resolve("./components"),
		"@Views": path.resolve("./views"),
	}}]];

	return {
		presets,
		plugins
	};
}