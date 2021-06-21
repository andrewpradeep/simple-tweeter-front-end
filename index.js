const express = require('express');
const app = new express();
const PORT = process.env.PORT || '3300';
const path = require("path");

console.log("initiazing application");

app.get("/",(req,res)=>{
	res.sendFile(path.resolve(__dirname,"./webapps/dist/index.html"))
})

app.get("/webapps/dist/:filename",(req,res)=>{
	res.sendFile(path.resolve(__dirname,`./webapps/dist/${req.params.filename}`));
})

app.listen(PORT,(err)=>{
	err ? console.error(err) : console.log(`Simple Tweeter is online and listening on http://localhost:${PORT}`);
});

