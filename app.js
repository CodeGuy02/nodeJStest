// Practice app from NodeJS online course 

/*
const interval = 1000;
setInterval(() => {
    console.log('our current directory is: ' + __dirname);    
}, interval);
*/

/*
const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}
*/

/*
Every file in NodeJS is a module.
file 1:
module.exports = {john, peter}
file 2:
const someName = require('./MODULE_NAME');
*/

/*
const os = require('os')

const user = os.userInfo()
console.log(user)

console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalMem(),
    freeMem: os.freemem(),
}
console.log(currentOS)

// Path Module:
const path = require('path')
console.log(path.sep)
const filePath = path.join('/content', 'subfolder', 'app.js')
console.log(filepath)
*/