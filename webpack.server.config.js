const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

let nodeModules = {};
fs.readdirSync('node_modules')
	.filter(x => { return ['bin'].indexOf(x) === -1 })
	.forEach(mod => { nodeModules[mod] = 'commonjs ' + mod });

module.exports = [
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
					test: path.join(__dirname, 'src'),
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