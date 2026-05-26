var express = require('express')

var app = express()

// app.get('/:id',(req,res)=>{
//     res.set('Content-Type','text/html')
//     // or res.type('text/html')
//     res.send('User with id = '+JSON.stringify(req.params.id).split('"')[1])
// })

app.get("/flights/:to/:from",(req,res)=>{
    res.send(req.params)
})

app.listen(3014,()=>{
    console.log('server started')
})