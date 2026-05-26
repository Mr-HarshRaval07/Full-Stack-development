http = require('http')
fs = require('fs')

http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'Content-Type':"text/html"})
        res.write(`<body>
            <p id='demo'></p>
            <script>
            setTimeout(()=>{
                document.getElementById('demo').innerHTML='welcome'},5000)
            </script>
            </body>`)
        res.end()
    }
    else{
        res.writeHead(404,{'Content-Type':"text/plain"})
        res.write('<h1>Page Not Found</h1>')
        res.end()
        document.getElementById
    }
}).listen(5692,()=>{
    console.log('http://localhost:5692')
})



// https://sites.google.com/view/fsd-mern/node/node_special