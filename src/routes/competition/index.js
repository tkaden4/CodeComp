const express = require('express');

let routes = express.Router();

/* add competition middleware */
function competitionMiddleware(req, res, next){
    if(req.params.id !== undefined){
        let id = req.params.id;
        req.user_info = {};
        req.user_info.competition = {
            name: "SAMPLE COMPETITION",
            users: 300
        };
        req.params.id = undefined;
        res.old_render = res.render;
        res.render = (name) => {
            res.old_render(name, {
                competition: req.user_info.competition
            });
        };
        next();
    }else{
        res.sendStatus(404);
    }
};

routes.use('/:id', competitionMiddleware);

routes.route('/:id')
    .get((req, res) => {
        res.render('pages/competition');
    });

module.exports = routes;
