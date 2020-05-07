const express = require('express')
const router = express.Router()

const { isAlphabetical } = require('../../utils/Validator')

/**
 * @route /api/characters
 * @returns catch all to return all characters
 */
router.get('/', (req, res, next) => {
    if(req.params.count > 0) next()
    res.status(200).json({msg: `Sending you data for all characters`})
})

/**
 * @route /api/characters/:name
 * @returns nation, first appeared, affiliation, teams, aliases, love interest, age, overview
 */
router.get('/:name', (req, res, next) => {
    const name = req.params.name
    if(isAlphabetical(name)) {
        res.status(200).json({msg: `Requesting data for character: ${name}`})
    } else {
        next(new Error(`Invalid input: ${name}. Name should only contain alphabetical characters.`))
    }
})

module.exports = router;
