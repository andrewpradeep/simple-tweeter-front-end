const express = require('express');

const app = new express();

const port = 3000;

app.send("/",(req,res)=>{
	res.send("hello world");
})

app.listen(port,()=>{
	console.log(`Simple Tweeter is online and listening on http://localhost:${port}`);
})