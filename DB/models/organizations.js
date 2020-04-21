const mongoose, { Schema } = require('mongoose')

const organizationSchema = new Schema({
    name: { type: String, required: true },
    notableMembers: [String],
    founders: [String],
    leaders: [String],
    affiliations: [String],
    headquarters: [String],
    firstAppearance: String, // episode title
    lastAppearance: String // episode title

})

module.exports = mongoose.model('Organization', organizationSchema)