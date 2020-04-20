const express = require('express')
const router = express.Router()

const { isAlphabetical } = require('../utils/Validator')

/**
 * @example /api/organizations
 * @returns catch all to return all organizations
 */
router.get('/', (req, res, next) => {
    if(req.params.count > 0) next()
    res.status(200).json({msg: `Sending you data for all organizations`})
})

/**
 * @example /api/organizations/:org
 * @returns list of members of organization OR error if org does not exist
 */
router.get('/:name', (req, res) => {
    const org = req.params.org
    if(isAlphabetical(org)) {
        res.status(200).json({msg: `Requesting data for org: ${org}`})    
    } else {
        next(new Error(`Invalid input: ${org}. Organization names should only contain alphabetical characters.`))
    }
})

module.exports = router;
