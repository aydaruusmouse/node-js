
const os= require('os');
const { dirname } = require('path');

// const user = os.userInfo();

// const art= os.arch();
// console.log(art);
// const cps= os.cpus();
// console.log(cps);

console.log(os.hostname());
console.log(os.networkInterfaces());
console.log(os.uptime());

const CurrentOs= {
    name: os.type(),
    hostname: os.hostname(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
    networkInfo: os.networkInterfaces()
}
console.log(CurrentOs);