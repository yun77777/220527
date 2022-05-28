import process from 'process';

process.on('beforeExit', (code) => console.log('2. right before the node process exits after all the works registered on the event loop exit: ', code));

process.on('exit', (code) => console.log('3. when the node process exits: ', code));

console.log('1. first message which is printed on the console');