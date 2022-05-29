const cookieSession = require('cookie-session');
const express = require('express');
const app = express();
const port = 3000;

app.use(cookieSession({
    name: 'session',
    keys: [/* secret keys */],
    maxAge: 24 * 60 * 60 * 1000
}));


app.get('/', (req, res) => {
    res.send('');
});

app.listen(port, () => console.log(`${port} is running`));