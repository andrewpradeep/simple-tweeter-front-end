const express = require('express');
const app = new express();
const PORT = process.env.PORT || '3300';
const path = require("path");

console.log("initiazing application");

function runWebPack()
{
	const config = require(path.resolve(__dirname,"./webapps/webpack.prod"));
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
				console.log("webpack successfull");
				resolve(res)
			}
		})
	});
}


app.get("/",(req,res)=>{
	res.sendFile(path.resolve(__dirname,"./webapps/dist/index.html"))
})

app.get("/webapps/dist/:filename",(req,res)=>{
	res.sendFile(path.resolve(__dirname,`./webapps/dist/${req.params.filename}`));
})
console.log("starting webpack ....");
runWebPack().then(()=>{
	app.listen(PORT,(err)=>{
		err ? console.error(err) : console.log(`Simple Tweeter is online and listening on http://localhost:${PORT}`);
	})
})

