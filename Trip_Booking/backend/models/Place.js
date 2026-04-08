const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    bestTimeToVisit: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model('Place', placeSchema);
