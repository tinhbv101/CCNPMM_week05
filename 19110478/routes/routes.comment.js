const express = require('express')
const controllers = require('../controllers/controllers.commentcontroller')
const router = express.Router()

router.post('/', controllers.addNewComment)

module.exports = router