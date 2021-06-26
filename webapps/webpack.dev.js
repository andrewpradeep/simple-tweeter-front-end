const path = require("path");
const htmlWebPackPlugin = require("html-webpack-plugin")
const webpackShellPlugin = require("webpack-shell-plugin-next")

module.exports = {
	mode : "development",
	entry: {
		app : path.resolve(__dirname,"./App.js")
	},
	output: {
		filename: "[name].js",
		chunkFilename: "[name].js",
		path : path.resolve(__dirname,"./dist/"),
		publicPath: "./webapps/dist/",
		clean : true
	},
	watch: true,
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
			}
		]
	},
	plugins: [new htmlWebPackPlugin({
		filename: path.resolve(__dirname,"./dist/index.html"),
		template : path.resolve(__dirname,"./index.html"),
	}),
		new webpackShellPlugin({
			onBuildEnd : {
				scripts : [`nodemon ${path.resolve((__dirname,"../index.js"))}`]
			}
		})
	]
}