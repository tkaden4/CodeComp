module.exports = (conn) => {
    let router = require('express').Router();

    router.use((req, res, next) => {
        if(req.user_info.competition && req.user_info.competition.id){
            next();
        } else {
            res.sendStatus(404);
        }
    });

    router.route('/')
        .get((req, res) => {
            let challenges = [];
            res.render("pages/challenges.pug", {
                challenges,
                user: {
                    name: "Kaden"
                },
                team: {
                    name: "Aries"
                }
            });
        });


    router.route('/new')
        .get((req, res) => {
            res.render("pages/new-challenge.pug");
        })
        .post((req, res) => {
            res.send("created");
        });

    router.route('/:cid', (req, res) => {
        res.render();
    });

    return router;
};

