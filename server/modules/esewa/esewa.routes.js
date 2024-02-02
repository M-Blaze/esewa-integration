const router = require("express").Router()

const esewaController = require("./esewa.controller")

router.post("/payload", esewaController.getEsewaPayload)
router.post("/completeOrder/:base64Input", esewaController.updateOrderToCompleted)

module.exports = router