module.exports = {
	id: 'default',
	distDir: 'build',
	viewsDir: 'views',
	staticViews: [],
	webpack: (config, env) => {

		config.module.rules.push({
			test: /\.svg/,
			use: {
				loader: 'svg-url-loader',
				options: {
					iesafe: true
				}
			}
		})

		return config;
	},
};