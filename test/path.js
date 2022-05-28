const path = require('path');

console.log(__dirname);
console.log(__filename);
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));
console.log(path.delimiter);
console.log(process.env.PATH);
console.log(process.env.PATH.split(path.delimiter));
console.log(path.dirname(__filename));
console.log(path.extname('index.html'));

path.format({
    root: '/ignored',
    dir: '/home/uer/dir',
    base: 'file.txt'
});

path.parse('/home/user/dir/file.txt');

console.log(path.sep);
console.log('home/user/dir'.split(path.sep));