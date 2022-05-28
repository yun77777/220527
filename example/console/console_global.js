console.log('hello world');
console.log('hello %s', 'world');

const world = 'world';
console.log(`hello ${world}`);

console.error(new Error('error message'));

const arr = [
    {name: 'Jone Doe', email: 'john@mail.com'},
    {name: 'Jeremy Go', email: 'jeremy@email.com'}
];

console.table(arr);

const obj = {
    students: {
        grade1: {class1:{}, class2:{}},
        grade2: {class1:{}, class2:{}},
        teachers: ['John Doe', 'Jeremy Go']
    }
}

console.dir(obj, {depth:1, color:true});

console.time('time for for-loop');
for(let i=0; i<999999; i++) {}
console.timeEnd('time for for-loop');