const express = require('express')
const cors = require('cors')
const Users=require('./Controllers/Users')
const productsRouter = require('./Routes/productRoute')
const AppError = require('./utils/appError')
const ErrController =require('./Controllers/errController')
const app = express()
const DB = require('./DB')
const port = 3001

app.use(express.json())
app.use(cors())
app.use('/v1/products',productsRouter)
app.post('/v1/login', Users.Login)
app.post('/v1/SignUp',Users.SignUp)
app.use(ErrController)
app.listen(3001, (req, res) => {
  console.log(`server running on ${port}`)
})
