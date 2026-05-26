var express = require('express')

var app = express()

let obj =[{name:'dev',age:28},{name:"het",age:32},{name:'jay',age:17}]

app.get('/',(req,res)=>{
    res.set('Content-Type','text/html')
    // or res.type('text/html')
    res.send(obj)
})

app.get('/sorted',(req,res)=>{
    res.set('Content-Type','text/html')
    // or res.type('text/html')
    const ans = obj.sort((a,b)=>b.age-a.age)
    for( i of ans){
        res.write('<b>'+i.name+'='+i.age+'</b><br>')
    }
    res.send()
})

app.listen(3000,()=>{
    console.log('server started')
})