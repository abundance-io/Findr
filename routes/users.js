const express = require('express');
const router = require('express').Router();
const User = require('../models/user');
//const marketRouter = require('./markets');
const bcrypt = require('bcrypt');
const app = express();
const Validator = require('../validator')

router.get('/' , (req,res) => {
    res.send('this is the new user page');
})


router.post('/login', async (req,res) =>{
    try{
    const  error = await  Validator.LoginValidation(req.body).error;
    if (error) return res.status(400).send(error.details[0].message)
    
    user = await User.findOne({username:req.body.username});
    !user && res.status(400).json('user not found');
    
    ValidPass = await bcrypt.compare(req.body.password,user.password);
    !ValidPass && res.send('wrong password').status(400)

    res.status(200).json(user)}
    catch(err){
        throw err;
    }


})




/* update user details 
this takes in the new user details in the body*/

router.put('/:id' ,async(req,res)  => {
    if (req.params.id == req.body.id || req.user.isAdmin){
        user = await User.findOne({_id:req.body.id})

        
    }


})
module.exports = router;


