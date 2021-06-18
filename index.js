const express = require('express');

const app = new express();

const PORT = process.env.PORT || '3300';

app.get("/",(req,res)=>{
	res.send("hello world");
})

app.listen(PORT,(err)=>{

	err ? console.error(err) : console.log(`Simple Tweeter is online and listening on http://localhost:${PORT}`);
})
