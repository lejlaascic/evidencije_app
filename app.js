
const http = require('http');

const server = http.createServer(function(req,res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

const port = 3000;
const hostname = 'localhost';


server.listen (port, hostname,() =>{
    console.log(`Server is running at http://${hostname}:${port}`);
})

