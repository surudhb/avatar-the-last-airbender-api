const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: {type: String, required: true}, // nation, city, vacation spot, dessert
    capital: String,
    nation: { type: String, required: true }, // fire, earth, air, water
    location: { type: String, required: true },
    governmentType: String,
    legalAuthority: String,
    spiritualAuthority: String,
    notableLeaders: [String],
    notableMembers: [String],
    currency: String,
    firstAppearance: String, // episode title
})

module.exports = mongoose.model('locations', locationSchema)