const router = require('express').Router()

const esewaRoutes = require('./modules/esewa/esewa.routes')
const productRoutes = require('./modules/products/products.routes')

router.use('/esewa', esewaRoutes)
router.use('/products', productRoutes)

module.exports = router