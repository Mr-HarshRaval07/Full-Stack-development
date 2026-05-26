fs = require('fs')
fs.writeFile('hello.txt','Good day',(err)=>{
    if(err) throw err
    console.log("written operation ended")

    fs.appendFile('hello.txt','is it great day',(err)=>{
    if(err) throw err
    console.log("append done")

fs.readFile('hello.txt','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)
    console.log('read operation done')
})
})
})

console.log('Process End')