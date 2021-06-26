
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
		publicPath: "./webapps/dist/",
		clean : true
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
		]
	},
	plugins: [new htmlWebPackPlugin({
		filename: path.resolve(__dirname,"./dist/index.html"),
		template : path.resolve(__dirname,"./index.html"),
	})]
}