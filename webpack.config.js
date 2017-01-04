const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fs = require('fs');

let nodeModules = {};
fs.readdirSync('node_modules')
	.filter(x => { return ['bin'].indexOf(x) === -1 })
	.forEach(mod => { nodeModules[mod] = 'commonjs ' + mod });

module.exports = [

	// Client CSS
	{
		devtool: 'source-map',
		entry: {
			'small-screens' : path.join(__dirname, 'src', 'static', 'css', 'small-screens.scss'),
			'large-screens' : path.join(__dirname, 'src', 'static', 'css', 'large-screens', 'large-screens.scss')
		},
		output: {
			path: path.join(__dirname, 'dist', 'css'),
			filename: '[name].css'
		},
		module: {
			loaders: [
				{
					test: /\.scss$/,
					loader: ExtractTextPlugin.extract("css!sass")
				},
				{
					test: /\.(eot|svg|ttf|woff|woff2)/,
					loader: 'file-loader?name=../fonts/[name].[ext]'
				}
			]
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			}),
			new ExtractTextPlugin('../css/[name].css', {
				allChunks: true
			})
		]
	},

	// Client JavaScript
	{
		devtool: 'source-map',
		entry: path.join(__dirname, 'src', 'client.js'),
		output: {
			path: path.join(__dirname, 'dist', 'js'),
			filename: 'bundle.js'
		},
		module: {
			loaders: [
				{
					test: /\.js$/,
					exclude: [
						path.join(__dirname, 'build'),
						path.join(__dirname, 'dist'),
						path.join(__dirname, 'src', 'static'),
						path.join(__dirname, 'src', 'views')
					],
					loader: ['babel-loader'],
					query: {
						cacheDirectory: 'babel-cache',
						presets: ['react', 'es2015']
					}
				}
			]
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			}),
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.OccurenceOrderPlugin(),
			new webpack.optimize.UglifyJsPlugin({
				compress: { warnings: false },
				mangle: true,
				sourcemap: false,
				beautify: false,
				dead_code: true
			})
		]
	},

	// Server JavaScript
	{
		devtool: 'source-map',
		entry: path.join(__dirname, 'src', 'server.js'),
		target: 'node',
		node: {
			__dirname: true
		},
		externals: nodeModules,
		output: {
			path: path.join(__dirname, 'build'),
			filename: 'server.js'
		},
		module: {
			loaders: [
				{
					test: /\.e?js$/,
					exclude: [
						path.join(__dirname, 'build'),
						path.join(__dirname, 'dist'),
						path.join(__dirname, 'src', 'static')
					],
					loader: ['babel-loader'],
					query: {
						presets: ['react', 'es2015']
					}
				}
			]
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify('production')
			}),
			new webpack.ProvidePlugin({
				React: 'react',
				ReactDOM: 'react-dom'
			}),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				}
			})
		]
	}
]