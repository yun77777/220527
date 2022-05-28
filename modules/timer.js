const timeout = setTimeout(() => console.log('it is going to be executed after 1 second'), 1000);
const interval = setInterval(() => console.log('it is executed every 1 second'), 1000);
const immediate = setImmediate(() => console.log('it is executed right after setImmediate() is called and all the following codes are executed'));
console.log('it is executed earlier than setImmediate()');
setTimeout(()=> clearInterval(interval), 3000);

module.exports = {
    timeout,
    interval,
    immediate
}