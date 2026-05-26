var expr = require('express')
var app = expr()
// using post method
app.use(expr.urlencoded({extended:true}))

app.get('/', function(req, res){
    res.send(`<form action='/data' method='post'>
    <input type='text' name='name' placeholder='Enter your name'>
    <input type='submit'>
    </form>`)
})

app.post('/data', function(req, res){
    res.send(`Hello ${req.body.name}`)
})

app.listen(3000, function(){
    console.log('Server is running on port 3000')
})