
expr = require('express')
app = expr()
// using post method
app.use(expr.static('./'))
app.listen(3000, function(){
    console.log('Server is running on port 3000')
})

// call image in localhost:3000/a.png