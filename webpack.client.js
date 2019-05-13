const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
	context: __dirname,
	entry: ['./src/client/browser.js'],
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
		new WebappWebpackPlugin('./src/client/favicon.svg'),
		new CopyPlugin([
			{ from: './src/client/sitemap.xml', to: './sitemap.xml' },
			{ from: './src/client/robots.txt', to: './robots.txt' },
		]),
	]
}

module.exports = merge(baseConfig, config);