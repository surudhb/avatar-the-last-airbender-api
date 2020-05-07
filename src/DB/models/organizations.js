const mongoose = require('mongoose')

const organizationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    notableMembers: [String],
    founders: [String],
    leaders: [String],
    affiliations: [String],
    headquarters: [String],
    firstAppearance: String, // episode title

})

module.exports = mongoose.model('organizations', organizationSchema)