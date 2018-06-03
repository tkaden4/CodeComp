const mongoose = require('mongoose');

module.exports = {
    User: mongoose.model('User', require('./user.js')),
    Challenge: mongoose.model('Challenge', require('./challenge.js')),
    Competition: mongoose.model('Competition', require('./competition.js'))
};
