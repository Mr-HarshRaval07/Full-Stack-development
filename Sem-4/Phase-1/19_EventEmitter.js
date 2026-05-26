var e = require('events')

var ee = new e()

fun=()=>{
    console.log('hello')
}

fun2=()=>{
    console.log('hi')
}

ee.on('a',fun)
ee.on('b',fun2)
ee.emit('b')
ee.emit('a')

ee.addListener('status',(code,msg)=>{
    console.log(`your status code is ${code} with ${msg} message`)
})

ee.emit('status','200','ok')

ee.on('conn',fun)
ee.on('conn',fun2)
let c = ee.listenerCount('conn')
console.log(c)

ee.emit('conn')

ee.removeListener('conn',fun)

let d = ee.listenerCount('conn')
console.log(d)
ee.emit('conn')