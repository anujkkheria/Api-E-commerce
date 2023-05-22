const mongo = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })

const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD)

mongo
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log('DB Connection Successful'))

module.exports = DB
