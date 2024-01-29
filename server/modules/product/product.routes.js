const router = require('express').Router()

const productController = require('./product.controller')

router.post('/buy', productController.buyProduct)

module.exports = router