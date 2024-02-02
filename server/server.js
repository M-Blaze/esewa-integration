require('dotenv').config()
const cors = require("cors")
const express = require('express')

const app = express()
const router = require("./router")
const { PORT } = process.env

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`)
})