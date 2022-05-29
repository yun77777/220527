const express = require('express');
const session = require('express-session');
const fileStore = require('session-file-store')(session);
const app = express();
const port = 3000;

app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        secure: true,
        maxAge: 60000
    },
    store: new fileStore()
}));

// app.get('/', (req, res) => {
//     res.json(req.session);
// });

app.get('/', (req, res, next) => {
    console.log(req.session);
    res.send(req.session);
});

app.options('/login', (req, res, next) => {
    const {email, pw} = req.body.param;

    // ### DB user authentication process codes ###

    req.session.email = email;
    req.session.is_logined = true;
    req.session.save(err => {
        if(err) throw err;
        res.redirect('/home');
    });
});

app.post('/logout', (req, res, next) => {
    req.session.destroy(); // delete session
    res.redirect('/login');
});

app.listen(port, () => console.log(`${port} is running`));