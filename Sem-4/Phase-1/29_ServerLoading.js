http = require('http')
fs = require('fs')

http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'Content-Type':"text/html"})
        setTimeout(()=>{
        res.write('<h1>Hello Home Page</h1>')
        res.end()
        },5000)
    }
    else{
        res.writeHead(404,{'Content-Type':"text/plain"})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
}).listen(5692,()=>{
    console.log('http://localhost:5692')
})