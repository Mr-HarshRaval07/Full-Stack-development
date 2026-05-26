fs = require('fs')
data = fs.readFileSync('1.txt','utf-8')
data = data.split(" ").sort()
console.log(data)
