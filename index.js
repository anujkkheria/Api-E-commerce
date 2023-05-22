const express = require('express')
const cors = require('cors')
const app = express()
const DB = require('./DB')
const port = 3001

app.use(express.json())
app.use(cors())
app.post('/v1/login', (req, res) => {
  console.log(req.body)
})
app.listen(3001, (req, res) => {
  console.log(`server running on ${port}`)
})
