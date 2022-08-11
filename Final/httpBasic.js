const http = require('http')
const {readFileSync} = require('fs')

// get all files: using file synce as we arent invoking files everytime. 
const homePage= readFileSync('./index.html')

const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url==='/'){
    res.writeHead(200,{'content-type':'text/html'})/*Sends a response header to the request.
     The status code is a 3-digit HTTP status code, like 404. The last argument, headers, are the response headers. */ 
    res.write(homePage)/**Mentions the body to be sent back */
    res.end()/*The res.end() function is used to end the response process. This method actually comes from the Node core, specifically the response.end() method of HTTP.ServerResponse. 
    Use to quickly end the response without any data. basically responds the html after the req is complete  */
    }
    else if(url==='/about') {
        res.writeHead(200,{'content-type':'text/html'}) 
        res.write('<h1>About</h1>') 
        res.end()
    }
    else{
        res.writeHead(404,{'content-type':'text/html'}) 
        res.write('<h1>page not found</h1>') 
        res.end()
    }
})

server.listen(5000)