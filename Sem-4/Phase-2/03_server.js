var express = require('express')

var app = express()

app.get('/',(req,res)=>{
    res.set('Content-Type','text/html')
    // or res.type('text/html')
    res.send('<h1>hello</h1>')
})

app.get('/about',(req,res)=>{
    res.set('Content-Type','text/html')
    // or res.type('text/html')
    res.send('<h1>About Page</h1>')
})

app.listen(3000,()=>{
    console.log('server started')
})