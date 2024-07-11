const UserDatabase = require('../models/user');

exports.registerUser = async (req, res) => {
    console.log(req.body);
    const { username, email, password, phonenumber} = req.body;
    try {
     let checkuser = await UserDatabase.findOne({email});
     if(checkuser){
        return res.status(400).json({message:'User already exist.'})
     }
     const newUser = new UserDatabase({
        username,
        email,
        password,
        phonenumber
     })

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
        const existuser = await UserDatabase.find({email});
        if(!existuser){
            res.json({message:'user not found'})
        }

        if(existuser.password == password ){
            res.json({data:existuser, message:'login is success'})
       
        }else{
            res.json({error:'invalid password'})
        }
        console.log(existuser);     
    } catch (error) {
        res.json({message:error})
    }
}