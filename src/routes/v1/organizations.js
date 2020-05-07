const express = require('express')
const router = express.Router()

const { isAlphabetical } = require('../../utils/Validator')

const Organizations = require('../../DB/models/organizations')

/**
 * @route /api/organizations
 * @returns catch all to return all organizations
 */
router.get('/', (req, res, next) => {
    if(req.params.count > 0) next()
    Organizations.find({}, {_id: 0})
    .then(data => res.status(200).json(data))
    .catch(next)
})

/**
 * @route /api/organizations/:org
 * @returns list of members of organization OR error if org does not exist
 */
router.get('/:org', (req, res, next) => {
    const org = req.params.org
    console.log(org)
    if(isAlphabetical(org)) {
        Organizations.findOne({name: org}, { _id: 0})
        .then(data => res.status(200).json(data))
        .catch(next)
    } else {
        next(new Error(`Invalid input: ${org}. Organization names should only contain alphabetical characters.`))
    }
})

module.exports = router;
