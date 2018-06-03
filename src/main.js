const express = require('express');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const sass = require('node-sass-middleware');

const DEBUG_STATE = true;

const STATIC_BASE = path.join(__dirname, '../web/');
const DIST = path.join(STATIC_BASE, 'dist');
const BUILD = path.join(STATIC_BASE, 'build');

const app = express();

app.use(
    sass({
        src: BUILD,
        dest: DIST,
        force: true,
        debug: true
    })
);

app.use('/', express.static(DIST));

app.set('views', DIST);

app.set('view engine', 'pug');

app.use(body_parser.json());
app.use(body_parser.urlencoded({
    extended: false
}));

app.use('/', require('./routes'));

app.listen(8080, () => console.log('started server'));
