var EventEmitter = require('events') //require to call events

var e = new EventEmitter() //create object

e.on('sayname',()=>{  //bind method to object
    console.log('My name is Dev')
})

e.on('sayname',()=>{  //2nd time bind method to object
    console.log('Hello Dev')
})
e.emit('sayname') //call object (both bindings will run)