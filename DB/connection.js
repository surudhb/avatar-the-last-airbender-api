const mongoose = require('mongoose')

const URI = encodeURI(process.env.DB_CONNECTION)

const params = {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const morph = (URI) => {
    const pURI = new URL(URI)
    return `${pURI.protocol}://${pURI.username}:****@${pURI.hostname}`
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