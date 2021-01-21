const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    name: String,
    url: String
});

const Card = mongoose.model('cards', cardSchema);
module.exports = Card;