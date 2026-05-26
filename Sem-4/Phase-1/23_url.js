var url = require('url')
var addr = 'http://localhost:8080/data?name="abc"&age=25#about'
var d = url.parse(addr)
console.log(d)
console.log(d.port)
process.noDeprecation=true  //removes deprecation warning
console.log(d.query)


var addr2 = 'http://localhost:8080/data?T1=25&T2=23&T3=24'

var d2 = url.parse(addr2,true)
console.log((Number(d2.query.T1)+Number(d2.query.T2)+Number(d2.query.T3))/3)
var x = (Number(d2.query.T1)+Number(d2.query.T2)+Number(d2.query.T3))/3
fs = require('fs')
fs.writeFileSync('haha.txt',JSON.stringify(x))

var myurl = new URL(addr2)
console.log(myurl)