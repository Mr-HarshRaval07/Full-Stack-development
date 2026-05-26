let e = require('events')
var x = new e()

x.on('con',()=>{
    console.log('connection sucessfull')
    x.emit('data')
})

x.on('data',()=>{
    console.log('data received sucessfully')
    console.log('thanks')
})

x.emit('con')