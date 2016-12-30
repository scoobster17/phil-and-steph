const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
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
					test: path.join(__dirname, 'src'),
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
	}
]