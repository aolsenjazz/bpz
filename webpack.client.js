const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
	context: __dirname,
	entry: ['./src/client/index.js'],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	resolve: {
		extensions: ['.css', '.js', '.json']
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						
					},
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg)$/,
				use: [
					'file-loader',
				],
			},
		]
	},
	optimization: {
		minimize: true,
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'styles.css',
		}),
	]
}

module.exports = merge(baseConfig, config);