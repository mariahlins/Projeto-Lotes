const express = require('express');
const lotes = require('./loteRoutes.js');

const routes = (app) =>{
    app.use(
        express.json(),
        lotes
    )
}

module.exports = routes;