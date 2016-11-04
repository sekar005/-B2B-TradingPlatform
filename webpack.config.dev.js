var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common.js');

module.exports = webpackMerge(commonConfig, {
	plugins:[
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.DefinePlugin({'process.env': { 
			'NODE_ENV': '"production"',
			'API_SERVER_URL':'"http://localhost:3000"'
		}}),
		new webpack.optimize.UglifyJsPlugin(),
]})
