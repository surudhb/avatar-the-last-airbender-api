const mongoose, { Schema } = require('mongoose')

const bendingSchema = new Schema({
    name: { type: String, required: true },
    synopsis: { type: String, required: true },
    inspiration: { type: String, required: true },
    pioneers: { type: [String], required: true },
    notableUsers: { type: [String], required: true },
    techniques: { type: [String], required: true },
    subtechniques: [String]
})

module.exports = mongoose.model('Bending', bendingSchema)