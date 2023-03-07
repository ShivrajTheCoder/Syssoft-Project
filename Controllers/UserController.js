const exp = module.exports;
const User = require("../models/User/UserModels");


//
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");

exp.signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    console.log(email);
    await User.find({ email })
        .then(async resp => {
            if (resp.length > 0) {
                return res.status(409).json({
                    message: "User already exists",
                })
            }
            bcrypt.hash(password, 10, async (err, result) => {
                if(err){
                    return res.status(500).json({
                        message:"Some error occured while saving",
                        error:err
                    })
                }
                const newUser = new User({...req.body,password:result});
                await newUser.save()
                    .then(() => {
                        return res.status(201).json({
                            message: "User created"
                        })
                    })
                    .catch(err => {
                        return res.status(500).json({
                            message: "error while creating user",
                            error: err
                        })
                    })
            })

        }).catch(err => {
            return res.status(500).json({
                message: "error while creating user",
                error: err
            })
        })
}

exp.login=async(req,res,next)=>{
    const {email,password}=req.body;
    await User.findOne({email})
        .then(result=>{
            if(!result){
                return res.status(500).json({
                    message:"You don't have an account, try signing up",
                })
            }
            bcrypt.compare(password,result.password,(err,resp)=>{
                if(err){
                    return res.status(500).json({
                        message:"someting went wrong, try again later",
                        error:err
                    })
                }
                const token =jwt.sign({
                    username:result.username,
                    userId:result._id
                },process.env.JWT_USER_KEY,
                {
                    expiresIn:"1h",
                })

                return res.status(200).json({
                    message:"logged id",
                    token,
                    userId:result._id
                })
            })
        })
}