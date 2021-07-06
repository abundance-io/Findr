const User = require('../models/user');
const router = require('express').Router();
const bcrypt = require('bcrypt');
const Validator = require('../validator');


/*this is the api for authentication 
it will handle
user registration 
user login 
user deletion

*/

router.get('/',(req,res) => { 
    res.status(400);
})


//user_registration
router.post('/register',async (req,res) => {
    console.log(req.body.username)

    try{
        //username_check = await User.findOne({username:req.body.username})

        const  error = await  Validator(req.body).error;
        //console.log(error);
        if (error) return res.status(400).send(error.details[0].message)
        const salt = await bcrypt.genSalt(10);
        hashedpassword = await bcrypt.hash(req.body.password,salt);
        user =  await new User({
        
            username:req.body.username,
            password:hashedpassword,
            email:req.body.email,
            gender:req.body.gender,
            age:req.body.age,
    })
        const newUser =  await user.save()
        //res.send('succesfull updated user')
        res.status(200).json(newUser)}
        catch(err){
            console.log(err);
            res.status(500);

    }

})
router.delete('/remove',async (req,res) => {
    try{
    user = await User.deleteOne({id:req.body._id});
    res.status(200).send(user);
    if(!user){
        err_message = "no_such user in database";

        res.status(400).send(err_message)
        res.send(err_message)
             
    }    
    }
    catch(err){
        res.status(500); // this means there is a server error
        throw err;
        
    }


}

)
module.exports = router