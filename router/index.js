const express = require('express')
const router = express.Router()
const { NumberController } = require('../controller/number')

router.post('/insert-odd', NumberController.insertOdd)
router.get('/functions', NumberController.function)


module.exports = router