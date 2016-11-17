const addon = require('./build/Release/addon')
const numCPUs = require('os').cpus().length;

let obj1 = addon.serial(10000)
console.log(`serial`)
console.log(`Pi : ${obj1.pi}`)
console.log(`Time Taken: ${obj1.time}`)

let obj2 = addon.parallel(10000,numCPUs)
console.log(`parallel`)
console.log(`Pi : ${obj2.pi}`)
console.log(`Time Taken: ${obj2.time}`)
console.log(`CPU's: ${obj2.cpus}`)
