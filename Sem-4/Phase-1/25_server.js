http = require('http')
http.createServer((req,res)=>{
    obj={'name':'dev','age':19}
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('how r u ?')
    res.write('<h1> hello Server </h1>')
    res.end(JSON.stringify(obj))
}).listen(5678,()=>{
    console.log('server Connected')
})
