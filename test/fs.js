const fs = require('fs');
let sql = require('../example/file/sql');

fs.readFile('./log/stderr.log', 'utf8', (err, data) => {
    if(err) {
        throw err;
    }
    console.log(data);
});

let log = fs.readFileSync('./log/stderr.log', 'utf8');
console.log(log);

let data1 = 'writing file test1';
fs.writeFile('./example/file/test_w.txt', data1, 'utf8', (err) => {
    if(err) {
        throw err;
    }
    console.log('completed to write a file asynchronously');
});

let data2 = 'writing file test2';
fs.writeFileSync('./example/file/test_w2.txt', data2, 'utf8');
console.log('complete to write a file synchronously');

fs.watchFile(__dirname + '/example/file/sql.js', (curr, prev) => {
    console.log('applied to it without restarting when sql.js is changed');
    delete require.cache[require.resolve('./example/file/sql.js')];
    sql = require('../example/file/sql');
})