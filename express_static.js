const express = require('express');
const app = express();
const port = 3000;
// app.use(express.static('public'));
app.use('/static', express.static('public'));
app.use(express.static('example'));

app.get('/', (req, res) => {
    res.send('');
});

app.listen(port, () => console.log(`${port} is running`));