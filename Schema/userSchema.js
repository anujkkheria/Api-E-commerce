const mongo = require('mongoose')
const bcrypt =require('bcryptjs')
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
      minlength:8,
      select:false
    },
    confirmPassword:{
      type:String,
      required:true,
      validate:{validator:function(el){return el===this.password},message:"pasword are not same"}
    }

  });
  
  userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password,12);
    this.confirmPassword = undefined
    next();
  })
  
  userSchema.methods.correctPassword = function(RecPass,CorrPass){
    
    return  bcrypt.compareSync(RecPass,CorrPass)
  }

  const User = mongo.model('User',userSchema)
  
 module.exports = User; 