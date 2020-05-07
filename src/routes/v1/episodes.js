const express = require('express')
const router = express.Router()

const { isNumeric, isAlphabetical } = require('../../utils/Validator')

const Episodes = require('../../DB/models/episodes')

/**
 * @route /api/episodes
 * @returns catch all to return all episode data
 */
router.get('/', (req, res, next) => {
    if(req.params.count > 0) next()
    Episodes.find({}, { _id:0 }) // do not return _id field
    .then(data => res.status(200).json(data))
    .catch(next)
})

/**
 * @route /api/episodes/:id where id= 109 for Season 1 Episode 9
 * @returns synopsis, characters, title, id, runtime, airdate, writer, locations, book
 */
router.get('/id/:id', (req, res, next) => {
    if(isNumeric(req.params.id)) {
        const id = parseInt(req.params.id)
        Episodes.findOne({id: id}, {_id: 0})
        .then(data => res.status(200).json(data))
        .catch(next)
    } else {
        next(new Error(`Invalid input: ${id}. Enter 103 for information on Season 1 Episode 3.`))
    }
})


/**
 * @route /api/episodes/title/:title where title = The boy in the iceberg
 * @returns synopsis, characters, id, title, runtime, airdate, writer, locations, book
 */
router.get('/title/:title', (req, res, next) => {
    const title = req.params.title
    if(isAlphabetical(title)) {
        Episodes.findOne({name: title}, {_id: 0})
        .then(data => res.status(200).json(data))
        .catch(next)
    } else {
        next(new Error(`Invalid input: ${title}. Episode titles should only contain alphabetical characters.`))
    }
})

module.exports = router;
