// WHATWG API
const myURL = new URL('https://example.org/?user=abc&query=xyz');
// legacy Node.js API
const url = require('url');

console.log(myURL.searchParams.get('user'));
console.log(myURL.searchParams.has('user'));
console.log(myURL.searchParams.keys());
console.log(myURL.searchParams.values());
myURL.searchParams.append('user','new');
console.log(myURL.searchParams.getAll('user'));
myURL.searchParams.set('user','admin');
console.log(myURL.searchParams.getAll('user'));
myURL.searchParams.delete('user');
console.log(myURL.searchParams.toString());

console.log(url.parse('https://user:pass@sub.example.com:8000/p/a/t/h?query=string#hash'));