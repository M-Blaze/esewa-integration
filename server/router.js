const router = require('express').Router()

const esewaRoutes = require('./modules/esewa/esewa.routes')

router.use('/esewa', esewaRoutes)

module.exports = router