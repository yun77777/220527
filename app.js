const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello world');
});

// app.all('/customer', (req, res) => {
//     res.send('response for all requests');
// });

app.get('/customer', (req, res) => {
    res.send('response for a get request');
});

app.post('/customer', (req, res) => {
    res.send('response for a post request');
});

// b : 0 or 1 times
app.get('/ab?cd', (req, res) => {
    res.send('ab?cd');
});

// b : more than 1 times
app.get('/ab+cd', (req, res) => {
    res.send('ab+cd');
});

// there is no letter or any letter can come here between 'ab' and 'cd'
app.get('/ab*cd', (req, res) => {
    res.send('ab*cd');
});

// (cd)? : 'cd' 0 or 1 times
app.get('/ab(cd)?e', (req, res) => {
    res.send('ab(cd)?e');
});

// regular expression
app.get(/a/, (req, res) => {
    res.send('/a/');
});

app.get(/^insert/, (req, res) => {
    res.send('/^insert/');
});

app.get('/example', (req, res, next) => {
    console.log('first callback method');
    next(); // next callback method
}, (req, res) => {
    res.send('second callback method'); // response for clients
});


const ex0 = (req, res, next) => {
    console.log('first callback method');
    next();
}

const ex1 = (req, res, next) => {
    console.log('second callback method');
    next();
}

const ex2 = (req, res, next) => {
    res.send('third callback method');
}

// app.get('/examples', [ex0, ex1, ex2]); // declare callback method as an array

const func = [];
func.push(ex0);
func.push(ex1);
func.push(ex2);

app.get('/ex', func); // declare callback method as an array


app.get('/test', (req, res, next) => {
    console.log('test');
    next();
}, (req, res) => {
    // res.send('res.send');
    // res.download(__dirname + '/example/file/test_w.txt');
    // res.end();
    // res.json({res:"hello"});
    // res.jsonp({res:"?"});
    // res.redirect('/a');
    // res.render('main');
    // res.sendFile(__dirname + '/example/file/test_w.txt');
    res.sendStatus(200);
});

app.route('/route')
.get((req, res) => {
    res.send('get');
})
.post((req, res) => {
    res.send('post');
})
.put((req, res) => {
    res.send('put');
})
.delete((req, res) => {
    res.send('delete');
});

app.listen(port, () => {
    console.log(`server is running. http://localhost:${port}`)
});