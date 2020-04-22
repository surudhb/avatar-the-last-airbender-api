const mongoose = require('mongoose')

const bendingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    synopsis: { type: String, required: true },
    inspiration: { type: String, required: true },
    pioneers: { type: [String], required: true },
    notableUsers: { type: [String], required: true },
    techniques: { type: [String], required: true },
    advancedTechniques: [String],
    specializations: [String],
    strengths: [String],
    weaknesses: [String]
})

module.exports = mongoose.model('bendings', bendingSchema, 'bending')