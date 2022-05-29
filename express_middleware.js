const express = require('express');
// const bodyParser = require('body-parser'); // (deprecated) built-in function over express 4.16 ver

const app = express();
const port = 3000;

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());


// parse application/x-www-form-urlencoded
app.use(express.urlencoded({extended: false}));

// parse appliction/json
// app.use(express.json());

app.use(express.json({
    limit: '50mb'
}));


const jsonParser = express.json();
const urlencodedParser = express.urlencoded({extended: false});

app.post('/login', urlencodedParser, (req, res) => {
    res.send('welcome, ' + req.body.username);
});

app.post('/api/users', jsonParser, (req, res) => {
    res.send('welcome ', req.body.username);
});

app.get('/', (req, res) => {
    console.log(req.body)
    res.send('/');
});

app.listen(port, () => console.log(`${port} is running`));