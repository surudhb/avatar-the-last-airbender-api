require('dotenv').config()
const express = require('express')
const path = require('path')

require('../DB/connection')()

const PORT = process.env.PORT || 5000


const app = express()

// body-parser module
app.use(express.json())

app.use(express.static('public'))


// ROUTES
app.use('/api/bending', require('./routes/bending'))
app.use('/api/characters', require('./routes/characters'))
app.use('/api/episodes', require('./routes/episodes'))
app.use('/api/locations', require('./routes/locations'))
app.use('/api/organizations', require('./routes/organizations'))

// ERROR HANDLER
app.use((req, res, next) => {
    // res.status(400).sendFile(path.join(__dirname, '../public/400.html'))
    res.status(404).sendFile(path.join(__dirname, '../public/404.html'))
    res.status(500).sendFile(path.join(__dirname, '../public/500.html'))
})

/**
 * @todo ERR HANDLER FOR BAD REQUESTS
 */
app.use((err, req, res, next) => {
    // console.error(err.stack)
    // figure out where to add err.message to DOM
    res.status(400).sendFile(path.join(__dirname, '../public/400.html'))
})


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
