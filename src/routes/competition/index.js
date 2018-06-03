const express = require('express');
const models = require('../../models');

let routes = express.Router();

/* retrieves a competition, and modifies the
 * res.render function to include the competition
 * data */
function competitionMiddleware(req, res, next){
    if(req.params.id !== undefined){
        models.Competition.findOne({ id: req.params.id }).then((comp) => {
            if(!comp){
                res.sendStatus(404);
            }
            let id = req.params.id;
            req.user_info = {};
            req.user_info.competition = comp;
            req.params.id = undefined;
            res.old_render = res.render;
            res.render = (name, props) => {
                res.old_render(name, {
                    competition: comp,
                    ...props
                });
            };
            next();
        }).catch((err) => {
            res.sendStatus(404);
        });
    }else{
        res.sendStatus(404);
    }
};

routes.use('/:id', competitionMiddleware);

routes.get('/:id', (req, res) => {
    res.render('pages/competition')
});

routes.use('/:id/challenges', require('./challenges')())
routes.use('/:id/dashboard', require('./dashboard'));

module.exports = routes;
