const express = require('express')
const router = express.Router()

const { isAlphabetical } = require('../utils/Validator')

/**
 * @example /api/locations
 * @returns catch all to return all locations
 */
router.get('/', (req, res, next) => {
    if(req.params.count > 0) next()
    res.status(200).json({msg: `Sending you data for all locations`})
})

/**
 * @example /api/locations/:name
 * @returns general information and popular members of group
 */
router.get('/:location', (req, res) => {
    const location = req.params.location
    if(isAlphabetical(location)) {
        res.status(200).json({msg: `Requesting data for location: ${location}`})    
    } else {
        next(new Error(`Invalid input: ${location}. Location names should only contain alphabetical characters.`))
    }
})

module.exports = router;
