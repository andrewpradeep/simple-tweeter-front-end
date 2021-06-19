const express = require('express');
const app = new express();
const PORT = process.env.PORT || '3300';
const path = require("path");

function runWebPack()
{
	const config = require("./webapps/webpack.prod");
	const webpack = require("webpack");
	const compiler = webpack(config);

	return  new Promise((resolve,reject)=>{
		compiler.run((err,res)=>{
			if(err)
			{
				reject(err);
			}
			else
			{
				console.log("webpack successfull", res);
				resolve(res)
			}
		})
	});
}


app.get("/",(req,res)=>{
	res.sendFile(path.resolve(__dirname,"./webapps/dist/index.html"))
})


runWebPack().then(()=>{
	app.listen(PORT,(err)=>{
		err ? console.error(err) : console.log(`Simple Tweeter is online and listening on http://localhost:${PORT}`);
	})
})

