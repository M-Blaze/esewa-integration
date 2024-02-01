const router = require("express").Router()

const esewaController = require("./esewa.controller")

router.post("/payload", esewaController.getEsewaPayload)

module.exports = router