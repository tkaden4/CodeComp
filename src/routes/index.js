const express = require('express');

let routes = express.Router();

routes.get('/', (req, res) => res.render('pages/index.pug'));

routes.route('/create')
    .get((req, res) => res.render('pages/create.pug'))
    .post((req, res) => {
        console.log(req.body);
        res.redirect('/dashboard');
    });

routes.route('/join')
    .get((req, res) => res.render('pages/join.pug'))
    .post((req, res) => {
        console.log(req.body.id);
        let id = 0;
        res.redirect('/competition/' + id);
    });

routes.use('/dashboard', require('./dashboard'));
routes.use('/competition', require('./competition'));

module.exports = routes;
