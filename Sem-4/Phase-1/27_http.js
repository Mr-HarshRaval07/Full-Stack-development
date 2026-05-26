http = require('http')
fs=require('fs')
http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'Content-Type':"text/html"})
        res.write('<h1>Hello Home Page</h1>')
        res.write("<img src='1.jpeg'/>")
        res.write("<br><a href='/'>Home</a><br><a href='/about'>About</a><br><a href='/contact'>Contact</a><br>")
        res.end()
    }
    else if(req.url=='/1.jpeg'){
        data = fs.readFileSync('1.jpeg')
        res.writeHead(200,{'Content-Type':"image/png"})
        res.end(data)
    }
    else if(req.url=='/about'){
        res.writeHead(200,{'Content-Type':"text/html"})
        res.write('<h1>This is About Page</h1>')
        res.write("<a href='/'>Home</a>")
        res.end()
    }
    else if(req.url=='/contact'){
        res.writeHead(200,{'Content-Type':"text/html"})
        res.write("<h1 style='color: red;'>This is Contact Page</h1>")
        res.write("<a href='/'>Home</a>")
        res.end()
    }
    else{
        res.writeHead(404,{'Content-Type':"text/plain"})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
}).listen(5678,()=>{
    console.log('http://localhost:5678')
})