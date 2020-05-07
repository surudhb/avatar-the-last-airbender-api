const express = require('express')
const router = express.Router()

const { isAlphabetical } = require('../../utils/Validator')

const Locations = require('../../DB/models/locations')

/**
 * @route /api/locations
 * @returns catch all to return all locations
 */
router.get('/', (req, res, next) => {
    if(req.params.count > 0) next()
    Locations.find({}, { _id:0 }) // do not return _id field
    .then(data => res.status(200).json(data))
    .catch(next)
})

/**
 * @route /api/locations/:name
 * @returns general information and popular members of group
 */
router.get('/:location', (req, res, next) => {
    const location = req.params.location
    if(isAlphabetical(location)) {
        Locations.findOne({name: location}, { _id: 0})
        .then(data => res.status(200).json(data))
        .catch(next)
    } else {
        next(new Error(`Invalid input: ${location}. Location names should only contain alphabetical characters.`))
    }
})

module.exports = router;
