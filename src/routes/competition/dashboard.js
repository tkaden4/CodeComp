const express = require('express');
const models = require('../../models');

let routes = express.Router();

routes.get('/', (req, res) => {
    res.render('pages/dashboard.pug', {
        competition: req.user_info.competition
    });
});

module.exports = routes;
