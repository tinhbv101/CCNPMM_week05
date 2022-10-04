const express = require('express')
const controllers = require('../controllers/controllers.postcontroller')
const router = express.Router()

router.get('/newPost', controllers.goToCreate)
router.get('/:id/comment', controllers.goToComment)
router.get('/', controllers.getAllPosts)
router.get('/:id', controllers.getById)
router.post('/', controllers.newPost)
router.delete('/:id', controllers.deleteById)
router.put('/:id', controllers.editById)
router.get('/:id/edit', controllers.goToEdit)

module.exports = router