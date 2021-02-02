module.exports = {
	apps : [{
		script: 'index.js',
		watch: '.',
		env: {
			'NODE_ENV': 'development',
			'MAPS_KEY': 'mapskey',
			'GA_ID': 'analyticsId'
		}
	}]
};
