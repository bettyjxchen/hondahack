const router = require('express').Router()
const filesTestController = require('../controllers/files.controller')

module.exports = router

router.get('/sign', filesTestController.get)