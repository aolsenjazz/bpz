const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
	target: 'node',
	entry: ['./src/server/server.js'],
	output: {
		filename: 'server.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
	},
	resolve: {
		extensions: ['.css', '.js', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'universal-style-loader',
					'css-loader'
				],
			},
			{
				test: /\.(png|svg|jpg)$/,
				use: [
					'file-loader',
				],
			},
		]
	},
	plugins: [
		new webpack.IgnorePlugin(/^pg-native$/),
	],
}

module.exports = merge(baseConfig, config);