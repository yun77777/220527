const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('route')
});

router.post('/insert', (req, res) => {
    res.send('/testRoute2/insert');
});

router.put('/update', (req, res) => {
    res.send('/testRoute2/update');
});

router.delete('/delete', (req, res) => {
    res.send('/testRoute2/delete');
});

module.exports = router;