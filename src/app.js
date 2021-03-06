require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')

require('./DB/connection')()

const PORT = process.env.PORT || 5000

const app = express()

// Allow CORS
app.use(cors())

// body-parser module
app.use(express.json())

app.use(express.static('public'))


// ROUTES
app.use('/api/v1/bending', require('./routes/v1/bending'))
app.use('/api/v1/characters', require('./routes/v1/characters'))
app.use('/api/v1/episodes', require('./routes/v1/episodes'))
app.use('/api/v1/locations', require('./routes/v1/locations'))
app.use('/api/v1/organizations', require('./routes/v1/organizations'))

// ERROR HANDLER
app.use((req, res, next) => {
    // res.status(400).sendFile(path.join(__dirname, '../public/400.html'))
    res.status(404).sendFile(path.join(__dirname, '../public/404.html'))
    res.status(500).sendFile(path.join(__dirname, '../public/500.html'))
})

/**
 * @TODO ERR HANDLER FOR BAD REQUESTS
 */
app.use((err, req, res, next) => {
    console.log(`in error handler`)
    console.error(err.stack)
    // figure out where to add err.message to DOM
    res.status(400).sendFile(path.join(__dirname, '../public/400.html'))
})


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
