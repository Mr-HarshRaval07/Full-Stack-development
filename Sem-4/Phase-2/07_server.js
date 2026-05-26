var expr = require('express')
var app = expr()
// using post method
app.use(expr.urlencoded({extended:true}))

app.get('/user/:id',(req,res)=>{
    const id = req.params.id
    const name = req.query.name
    const mark = req.query.mark
    
    res.json({
        "message":'Data received',
        'params':{'id':id},
        'query':{name,mark}
    })
})
app.listen(3000)