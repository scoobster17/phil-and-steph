const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	entry: path.join(__dirname, 'src', 'client.js'),
	output: {
		path: path.join(__dirname, 'src', 'static', 'js'),
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
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract("css!sass")
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)/,
				loader: 'file-loader?name=src/static/fonts/[name].[ext]'
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
		}),
		new ExtractTextPlugin('../css/style.css', {
			allChunks: true
		})
	]
}