var express = require('express')

var app = express()

app.get('/',(req,res)=>{
    let obj = {name:'abc',age:28}
    // res.write(JSON.stringify(obj))
    res.send(obj.age+" ")
    // concated string to avoid sending json obj and by converting and sending string
    // res.json(obj)
})

app.listen(3000,()=>{
    console.log('server started')
})