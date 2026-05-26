var expr = require('express')
var app = expr()
// using post method
app.use(expr.urlencoded({extended:true}))

const a =(req,res,next)=>{
    req.uname='abc'
    console.log('uname insert')
    next()
}

const b =(req,res,next)=>{
    req.mark=20+3
    console.log('mark updated')
    next()
}

app.use('/data', a, b)
app.get('/data', function(req, res){
    res.send(`Hello ${req.uname} and your mark is ${req.mark}`)
})
app.listen(3000, function(){
    console.log('Server is running on port 3000')
})