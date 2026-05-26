path = require('path')
a = path.dirname('C:\Users\LJENG\Desktop\Dev B3\FSD\17_pathModule.js')
console.log("1: "+a)
b = path.basename('C:\Users\LJENG\Desktop\Dev B3\FSD\17_pathModule.js')
console.log("2: "+b)
c = path.extname('C:\Users\LJENG\Desktop\Dev B3\FSD\17_pathModule.js')
console.log("3: "+c)
d=path.parse('C:\Users\LJENG\Desktop\Dev B3\FSD\17_pathModule.js')
console.log('4')
console.log(d)

if(d.ext=='.js'){
    console.log('js file')
}
else{
    console.log('not a js file')
}