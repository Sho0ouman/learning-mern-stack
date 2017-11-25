const express = require('express');

const app = express();
const port = 3000;
const protocol = 'http';
const server = '127.0.0.1';

app.use(express.static('static'));
app.listen(port,()=>{
	console.log(`App started on ${protocol}://${server}:${port}.`);
});


