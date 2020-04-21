const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    aliases: [String],
    nationality: String, // nation
    organizations: [String],
    gender: String,
    allies: [String],
    enemies: [String],
    loveInterests: [String],
    professions: [String],
    weaponsOfChoice: [String],
    fightingStyles: [String],
    firstAppearance: String, // episode title
    lastAppearance: String, // episode title
    voicedBy: String
})

module.exports = mongoose.model('Character', characterSchema)