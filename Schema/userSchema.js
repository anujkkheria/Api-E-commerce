const mongo = require('mongoose')
const validator = require('validator') 
const userSchema= mongo.Schema({
    name:{
      type:String,
      required:[true]
    },
    email:{
      type:String,
      required:[true],
      unique:true,
      lowercase:true,
      validate:[validator.isEmail,'Enter a valid Email']
    },
    password:{
      type:String,
      required:true,
      minlength:8
    },
    passwordConfirm:{
      type:PerformanceServerTiming,
      required:true,
    }
  })
  
 module.exports = userSchema 