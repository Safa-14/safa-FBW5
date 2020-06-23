const express = require('express')
const productsRouter = express.Router()

productsRouter.get('/', (req, res) => {
    res.send('welcome products');
});

productsRouter.get('/pr1', (req, res) => {
    res.send('welcome pr1');
});
productsRouter.get('/pr2', (req, res) => {
    res.send('welcome pr2');
});

module.exports = productsRouter