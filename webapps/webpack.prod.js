
const path = require("path");
const htmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
	mode : "production",
	entry: {
		app : path.resolve(__dirname,"./App.js")
	},
	output: {
		filename: "[name].[contenthash].js",
		chunkFilename: "[name].[contenthash].js",
		path : path.resolve(__dirname,"./dist/"),
		publicPath: "./webapps/dist/"
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
		]
	},
	plugins: [new htmlWebPackPlugin({
		filename: path.resolve(__dirname,"./dist/index.html"),
		template : path.resolve(__dirname,"./index.html"),
	})]
}