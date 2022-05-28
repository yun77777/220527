const {add, minus, defaultNum} = require('../modules/calculator.js');
// const timer = require('./modules/timer');
const {nextTick} = require('process');
const os = require('os');

console.log(add(1,2));
console.log(minus(2,1));
console.log(defaultNum);

// timer;


console.log('process.env: ', process.env);


console.log('start');
setTimeout(()=> console.log('setTimeout callback'), 0);
nextTick(() => console.log('nextTick callback'));
console.log('end');


const osList = [];
const osObj = {};
osObj.arch = os.arch;
osObj.cpus = os.cpus;
osObj.hostname = os.hostname;
osObj.networkInterfaces = os.networkInterfaces;
osObj.type = os.type;
osObj.platform = os.platform;
osObj.release = os.release;
osObj.homedir = os.homedir;
osObj.tmpdir = os.tmpdir;
osObj.totalmem = os.totalmem;
osObj.freemem = os.freemem;
osList.push(osObj);

console.log(osList);