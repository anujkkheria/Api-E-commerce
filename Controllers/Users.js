const User = require('../Schema/userSchema')
const jwt =require('jsonwebtoken')
const errController =require('../utils/appError')
const catchAsync = require('../utils/catchAsync')
exports.SignUp = async(req,res,next)=>{
    const newUSER = await User.create(req.body);
    const token = jwt.sign({id:newUSER._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_Expires})
    console.log({...req.body})
    res.status(201).json({
        status:"succcess",
        token,
        data:{
            user:newUSER
        }
    });
}

exports.Login = async(req,res,next)=>{
    const {email,password} = req.body;

    if (!email || !password){
        return(next(new AppError("provide email address and password",400)))
    }
    const user = await User.findOne({email}).select('+password')
    const correct = user.correctPassword(password,user.password)
    console.log(correct,password,user.password)
    if(!user || !correct){
        return (next(new AppError("invalid Email/password",401)))
    }
    const userInfo = await User.find({email})
    console.log(!user||!correct)
    console.log(!correct)
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_Expires});
    res.status(200).json({
        status:"success",
        token,
        userInfo
    })
}