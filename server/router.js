const router = require('express').Router()

const productRoutes = require('./modules/product/product.routes')


router.use('/product', productRoutes)

module.exports = router