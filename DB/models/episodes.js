const mongoose, { Schema } = require('mongoose')

const episodeSchema = new Schema({
    name: { type: String, required: true },
    id: { type: Number, min: 100, max: 321},
    synopsis: String,
    directedBy: String,
    writtenBy: String,
    animatedBy: String,
    firstAired: Date
})

module.exports = mongoose.model('Episode', episodeSchema)