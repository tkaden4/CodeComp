const express = require('express');
const models = require('../models');

let routes = express.Router();

routes.get('/', (req, res) => res.render('pages/index.pug'));

routes.route('/create')
    .get((req, res) => res.render('pages/create.pug'))
    .post((req, res) => {
        let comp = new models.Competition({
            name: req.body.name,
            id: "0",
            nusers: 0,
            users: []
        });
        comp.save().then(() => {
            res.redirect('/competition/0/dashboard');
        });
    });

routes.route('/join')
    .get((req, res) => res.render('pages/join.pug'))
    .post((req, res) => {
        models.Competition.findOne({ name: req.body.comp_name }).then((comp) => {
            if(!comp){
                res.sendStatus(404);
            }
            res.redirect('/competition/' + comp.id);
        });
    });

routes.use('/competition', require('./competition'));

module.exports = routes;
