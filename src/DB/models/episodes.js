const mongoose = require('mongoose')

const episodeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    id: { type: Number, min: 100, max: 321},
    book: { type: String, required: true },
    synopsis: { type: String, required: true },
    animatedBy: String,
    directedBy: String,
    writtenBy: [String],
    firstAired: Date
})

module.exports = mongoose.model('Episode', episodeSchema)