const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config()

function Auth (req,res,next){
    const token = req.header('auth-token')
    !token && res.send('AccessDenied').status(401);

    try{
        const verified = jwt.verify(token,process.env.TOKEN_SECRET);
        req.user = verified;
        console.log(verified);
        next()
       
    }
    catch(err){
        res.send('invalid Token').status(400)
    }

}

module.exports = Auth;