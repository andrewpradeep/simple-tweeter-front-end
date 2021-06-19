
const path = require("path");
const htmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
	mode : "production",
	entry: {
		app : path.resolve(__dirname,"./App.js")
	},
	output: {
		filename: "[name].[contenthash].js",
		path : path.resolve(__dirname,"./dist/"),
		publicPath: "./webapps/dist/"
	},
	plugins: [new htmlWebPackPlugin({
		filename: path.resolve(__dirname,"./dist/index.html"),
		template : path.resolve(__dirname,"./index.html"),
		hash : true,
	})]
}