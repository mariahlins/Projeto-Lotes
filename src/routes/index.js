const express = require('express');
const lotes = require('../routes/loteRoutes.js');

const routes = (app) =>{
    app.use(
        express.json(),
        lotes
    )
}

module.exports = routes;
