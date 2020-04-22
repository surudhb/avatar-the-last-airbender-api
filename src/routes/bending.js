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
    Bending.find({}, { _id:0 }) // do not return _id field
    .then(data => res.status(200).json(data))
    .catch(next)
})

/**
 * @route GET /api/bending/:form
 * @returns notable moves, notable users, first appeared, creator
 */
router.get('/:form', (req, res, next) => {
    const form = req.params.form
    if(isAlphabetical(form)) {
        Bending.findOne({name: form.toLowerCase()}, { _id: 0})
        .then(data => res.status(200).json(data))
        .catch(next)
    } else {
        next(new Error(`Invalid input: ${form}. Bending type should only contain alphabetical characters.`))
    }
})

module.exports = router;