var expr = require('express')
var app = expr()
// using post method
app.use(expr.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send(`<h1>User form</h1>
        <form action="/data" method='post'>
        uname: <input type='text' name='uname'>
        Age: <input type='text' name='age'>
        <button type='submit'>submit</button>
        </form>`)
})
app.post('/data',(req,res)=>{
 
    res.send('Name='+req.body.uname+'Age='+req.body.age)
})
app.listen(5678)