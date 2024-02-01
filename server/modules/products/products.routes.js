const router = require("express").Router()

const productController = require('./products.controller')

router.get("/", productController.getProducts)

module.exports = router