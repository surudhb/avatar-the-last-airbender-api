const express = require('express')
const router = express.Router()

module.exports = router;

/**
 * @example /api/organizations/${organzationName}
 * @returns list of members of organization OR error if org does not exist
 */
router.get('/:name', (req, res) => {
    res.json({msg: `Requesting data for org: ${req.params.name}`})
})

/**
 * @example /api/organizations/member/${memberName}
 * @returns list of organizations member is part of or error if member does not exist
 */
router.get('/member/:member', (req,res) => {
    res.json({msg: `Requesting org data for member: ${req.params.member}`})
})