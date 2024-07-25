const jwt = require('jsonwebtoken');
const secretKey = '133a889e51573dae5d1f527089e91a3c3c4d547490c4e762bd6a3416905a11c811e8c93bdf9a2cac853ae8c6ed89890deff99826d67b469d758667bc26d9df45'

const authenticatetoken = (req, res, next) =>{
    const token = req.headers['authorization']?.split(' ')[1];
   
    if(!token){
        return res.json({message:"No Token Provided"})
    }
    try {
        const decoded = jwt.verify(token, secretKey)
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({meessage:'invalid token'})
    }
}

module.exports = authenticatetoken;