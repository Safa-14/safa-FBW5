const express = require('express')
const servicesRouter = express.Router()

servicesRouter.get('/', (req, res) => {
    res.send('welcome services')
});

servicesRouter.get('/subservice1', (req, res) => {
    res.send('welcome subservices')
});


module.exports = servicesRouter
