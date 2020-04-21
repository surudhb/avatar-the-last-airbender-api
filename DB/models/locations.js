const mongoose, { Schema } = require('mongoose')

const locationSchema = new Schema({
    name: { type: String, required: true },
    type: {type: String, required: true}, // nation, city, vacation spot, dessert
    capital: String,
    nation: String, // fire, earth, air, water
    governmentType: String,
    legalAuthority: String,
    spiritualAuthority: String,
    pastLeaders: [String],
    currency: String,
    firstAppearance: String, // episode title
    lastAppearance: String // episode title
})

module.exports = mongoose.model('Location', locationSchema)