const express = require('express')
const router = express.Router()

const { isAlphabetical } = require('../utils/Validator')

const Bending = require('../DB/models/bending')

/**
 * @route GET /api/bending
 * @returns catch all to return all bending forms
 */
router.get('/', (req, res, next) => {
    if(req.params.count > 0) next()
    Bending.find()
    .then(data => res.status(200).json(data))
    .catch(next)
})

/**
 * @route GET /api/bending/:form
 * @returns notable moves, notable users, first appeared, creator
 */
router.get('/:form', (req, res) => {
    const form = req.params.form
    if(isAlphabetical(form)) {
        res.status(200).json({msg: `Requesting data for the bending form: ${form}`})
    } else {
        next(new Error(`Invalid input: ${form}. Bending type should only contain alphabetical characters.`))
    }
})

module.exports = router;