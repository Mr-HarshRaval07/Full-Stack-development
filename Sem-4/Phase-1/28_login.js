addr = 'http://localhost:5692/login.html'
url = require('url')
http = require('http')
fs = require('fs')

q = url.parse(addr)
qdata = q.pathname
console.log(qdata)

http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'Content-Type':"text/html"})
        res.write('<h1>Hello Home Page</h1>')
        res.write("<br><a href='/login.html'>Login</a>")
        res.end()
    }
    else if(req.url==qdata){
        data = fs.readFileSync('.'+qdata)
        res.end(data)
    }
    else{
        res.writeHead(404,{'Content-Type':"text/plain"})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
}).listen(5692,()=>{
    console.log('http://localhost:5692')
})



// file = '.'+(req.url=='/'?'/login.html':req.url)