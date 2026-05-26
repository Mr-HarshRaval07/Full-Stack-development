obj =[{"name":"Dev",'Age':19},{"name":"Dev",'Age':20},{"name":"Dev",'Age':21}]
fs = require('fs')
fs.writeFileSync('1.txt',JSON.stringify(obj))

data = fs.readFileSync('1.txt')
console.log(JSON.parse(data))