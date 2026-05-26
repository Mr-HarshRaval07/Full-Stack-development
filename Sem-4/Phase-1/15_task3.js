var shape=[{name:"circle",diameter:8},{name:"square",side:10}]
fs = require('fs')
fs.writeFileSync('1.txt',JSON.stringify(shape))

data = fs.readFileSync('1.txt')
data = JSON.parse(data)
console.log(data)
console.log("perimeter of circle: " + 3.14*data[0]['diameter'])
console.log("perimeter of square: " + data[1]['side']*4)
