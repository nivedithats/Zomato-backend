const UserDatabase = require('../models/user');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secretKey = '133a889e51573dae5d1f527089e91a3c3c4d547490c4e762bd6a3416905a11c811e8c93bdf9a2cac853ae8c6ed89890deff99826d67b469d758667bc26d9df45';

const validator = require('validator');


exports.registerUser = async (req, res) => {
    console.log(req.body);
    const { username, email, password, phonenumber} = req.body;
    console.log(password);
    if(!validator.isEmail(email)){
      return res.json({message:"invalid email formate"})
    }
    if(!validator.isStrongPassword(password, [{minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}])){
      return res.json({message:"password is not strong"})
    }

    try {
     let checkuser = await UserDatabase.findOne({email});
     if(checkuser){
        return res.status(400).json({message:'User already exist.'})
     }
    const hashedPassword = await bcryptjs.hash(password, 12);
    const newUser =  new UserDatabase({username, email, password:hashedPassword, phonenumber })
     await newUser.save();
     res.json({message:'registered successfully', data:newUser});
    } catch (error) {
      res.json({message:'Something went wrong , please try again later', data:error})     
    }
} 


exports.allUsers = async (req, res) =>{
  try {
    const users = await UserDatabase.find();
    res.json({length:users.length, data:users})
  } catch (error) {
    res.json({message:'no users found'})
  }
}
exports.login = async (req, res) =>{
    const {email, password} = req.body;
    try {
        const existuser = await UserDatabase.findOne({email});
        if(!existuser){
            res.json({message:'user not found'})
        }
        console.log(password)
        console.log(existuser.password)
       const isPasswordCorrect = await bcryptjs.compare(req.body.password, existuser.password);
       if(!isPasswordCorrect){
        return res.status(400).json({message:"invalid credentials"})
       }

       const token = jwt.sign({id:existuser._id, email:existuser.email}, secretKey, {expiresIn:'1h'} )
        res.status(200).json({message:"login success", data:existuser, token:token})
    } catch (error) {
      console.log(error);
        res.status(500).json({message:error, error:"error"})
    }
}


exports.validateToken = (req, res) =>{
  res.status(200).json({user:req.user})
}