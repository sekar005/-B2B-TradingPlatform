var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
	plugins:[
		new webpack.NoErrorsPlugin(),
		new webpack.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({'process.env': { 
			'NODE_ENV': '"production"'
			'API_SERVER_URL':'"http://web2.de:8888"'
		}}),
		new webpack.UglifyJsPlugin()
})