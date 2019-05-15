const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const base = {
	stats: {
		colors: true,
		reasons: true,
		chunks: false,
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: '/node_modules'
			}
		]
	}
}

const client = {
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
		new webpack.DefinePlugin({
			'API': JSON.stringify('http://localhost:3000/api'),
		}),
	]
}

const server = {
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

const mergedClient = merge(baseConfig, client);
const mergedServer = merge(baseConfig, server);

module.exports = [mergedClient, mergedServer];
