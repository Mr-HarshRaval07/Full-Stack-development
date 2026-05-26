var fs = require('fs')
var e = require('events')
var ee = new e()

ee.on('write',()=>{
    fs.writeFile('new.txt','this is data',(err)=>{
        if(err) throw err
        console.log('write done')
        ee.emit('append')
    })
})
ee.on('append',()=>{
    fs.appendFile('new.txt','this is data',(err)=>{
        if(err) throw err
        console.log('append done')
        ee.emit('read')
    })
})
ee.on('read',()=>{
    fs.readFile('new.txt','utf-8',(err,data)=>{
        if(err) throw err
        console.log(data)
        ee.emit('final')
    })
})
ee.on('final',()=>{
    console.log('thank you for using program')
})
ee.emit('write')