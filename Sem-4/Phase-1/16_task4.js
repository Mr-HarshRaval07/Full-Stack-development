obj = {data:{a:15,b:20,c:[40,30]}}
fs = require('fs')

fs.writeFileSync('1.txt',JSON.stringify(obj))

data = fs.readFileSync('1.txt')
data = JSON.parse(data)
console.log(data)
x=data['data']['a']+data['data']['b']
console.log("addition: "+x)