const express = require('express')
const router = express.Router()
const { NumberController,Function } = require('../controller/number')

router.post('/insert-odd', NumberController.insertOdd)


module.exports = router