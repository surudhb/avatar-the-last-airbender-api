const mongoose = require('mongoose')

const URI = `mongodb://${process.env.DB_USER}:${escape(process.env.DB_PASSWORD).replace('@', '%40')}@${process.env.DB_SUFFIX}`

const params = {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const morph = (URI) => {
    return `${process.env.DB_USER}`
}

const log = (state, URI) => console.log(`DB ${state}: ${morph(URI)}`)

module.exports = async () => {
    try {
        mongoose.connection.on('open', () => log('open', URI))
        mongoose.connection.on('close', () => log('close', URI))
        mongoose.connection.on('error', () => log('error', URI))
        await mongoose.connect(URI, params)
    } catch(err) {
        throw new Error(`Connection to DB failed: ${err}`)
    }
}