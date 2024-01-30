require('dotenv').config()
const cors = require("cors")
const express = require('express')
const { PORT } = process.env
const app = express()

const router = require("./router")

app.use(cors())
app.use(express.json())
app.use('/', router)

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`)
})