
let mongoose = require('mongoose');

// Create a model class
let concertModel = mongoose.Schema(
    {
        name: String,
        state: String,
        price: Number,
    },
    {
        collection: "Concert"
    }
);

module.exports = mongoose.model('Concert', concertModel);