const express = require('express');

let routes = express.Router();

routes.get('/', (req, res) => {
    res.render('pages/dashboard.pug', {
        competition: {
            name: "ASPCA Programming Competition",
            nusers: 32
        }
    });
});

module.exports = routes;
