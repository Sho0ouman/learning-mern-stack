const http = require('http');
const fs = require('fs');

const fileName = 'hello-world.htm';
const port = 8080;
 
http.createServer((req,res)=>{
	console.log('Server is running on http://localhost:' + port);
	
	fs.readFile(fileName, (err, data)=>{
		if(err){
			console.error(err);
			res.writeHead(404, {'Content-Type': 'text/html'});
			res.write(err);
			res.end();
		}else{
			res.writeHead(200, {'Content-Type': 'text/html'});
	    	res.write(data);
	    	res.end();
		}
	  });
}).listen(port);
