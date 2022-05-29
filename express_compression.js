const compression = require('compression');
const express = require('express');
const app = express();
const port = 3000;

// app.use(compression());
app.use('/api/getMap', compression());

app.get('/', (req, res) => {
    res.send('');
});

app.listen(port, () => console.log(`${port} is running`));