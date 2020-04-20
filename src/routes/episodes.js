const express = require('express')
const router = express.Router()

const { isNumeric, isAlphabetical } = require('../utils/Validator')

/**
 * @example /api/episodes
 * @returns catch all to return all episode data
 */
router.get('/', (req, res, next) => {
    if(req.params.count > 0) next()
    res.status(200).json({msg: `Sending you data for all episodes`})
})

/**
 * @example /api/episodes/:id where id= 109 for Season 1 Episode 9
 * @returns synopsis, characters, title, id, runtime, airdate, writer, locations, book
 */
router.get('/id/:id', (req, res) => {
    if(isNumeric(req.params.id)) {
        const id = parseInt(req.params.id)
        res.status(200).json({msg: `Requesting data for episosde with id: ${id}`})
    } else {
        next(new Error(`Invalid input: ${id}. Enter 103 for information on Season 1 Episode 3.`))
    }
})


/**
 * @example /api/episodes/title/:title where title = The boy in the iceberg
 * @returns synopsis, characters, id, title, runtime, airdate, writer, locations, book
 */
router.get('/title/:title', (req, res) => {
    const title = req.params.title
    if(isAlphabetical(title)) {
        res.status(200).json({msg: `Requesting data for episode with name: ${title}`})
    } else {
        next(new Error(`Invalid input: ${title}. Episode titles should only contain alphabetical characters.`))
    }
})

module.exports = router;
