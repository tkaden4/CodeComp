module.exports = require('mongoose').Schema({
    name: String,
    id: String,
    nusers: Number,
    teams: [String],
    challenges: [String]
});
