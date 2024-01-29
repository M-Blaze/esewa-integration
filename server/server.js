require('dotenv').config()
const express = require('express')
const { PORT } = process.env
const app = express()

const router = require("./router")

app.use('/', router)

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`)
})