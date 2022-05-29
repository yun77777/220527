const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('root route')
});

app.get('/error', (req, res) => {
    throw new Error('error happend');
});


// error process middleware method
app.use((err, req, res, next) => {
    res.status(500).json({
        statusCode: res.statusCode,
        errMessage: err.message
    });
});

app.get('/error2', (req, res, next) => {
    next(new Error('error2'));
});

app.listen(port, () => console.log(`${port} port is running`));