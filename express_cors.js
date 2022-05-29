const express = require('express');
const cors =require('cors');
const app = express();
const port = 3005;

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));


app.get('/products/:id', (req, res, next) => {
    res.json({msg: 'This is CORS-enabled for all origins!'});
});

app.listen(port, () => console.log(`${port} is running`));