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

module.exports = async () => {
    try {
        mongoose.connect(URI, params)
        mongoose.connection.on('open', () => console.log(`DB open: ${morph(URI)}`))
        mongoose.connection.on('close', () => console.log(`DB close: ${morph(URI)}`))
        mongoose.connection.on('error', () => console.error(`DB error: ${morph(URI)}`))
    } catch(err) {
        throw new Error(`Connection to DB failed: ${err}`)
    }
}