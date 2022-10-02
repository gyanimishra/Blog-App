
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/User');

const createToken = (user) => {
	return jwt.sign({ user }, process.env.SECRET, {
		expiresIn: '7d',
	});
};

module.exports.registerValidation=[
    body("name").not().isEmpty().trim().withMessage("Name is reuired!"),
    body("email").not().isEmpty().trim().withMessage("Email is reuired!"),
    body("password").isLength({min:6}).withMessage("Password must be 6 digit!")
]

module.exports.register= async (req,res)=>{
    const {name,email,password}= req.body;

    const errors =validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    try {

        const checkUser= await User.findOne({email})
        if(checkUser){
            return res
            .status(400)
            .json({ errors: [{ msg: 'Email is already Exits' }] });
        }

        // password salt create
        const salt= await bcrypt.genSalt(10)
         // hash password create
         const hash= await bcrypt.hash(password,salt)

        try {
           const user= User.create({
            name,
            email,
            password:hash
           })
           const token = createToken(user);
           return res.status(200).json({msg:'Your account has been created Successfuly !',token})

        } catch (error) {
            return res.status(500).json({ errors: error });
        }
        
    } catch (error) {
        return res.status(500).json({ errors: error });
    }
   

}

// login routes..........................................



module.exports.loginValidation=[
    body("email").not().isEmpty().trim().withMessage("Email is reuired!"),
    body("password").not().isEmpty().withMessage("Password is reuired!")
]



module.exports.login= async (req,res)=>{
   
    const errors =validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    const {email,password}= req.body;
    try {
        const user= await User.findOne({email})
         
        if(user)
        {
             const passwordMatched= await bcrypt.compare(password,user.password)
             if(passwordMatched)
             {
                const token = createToken(user);
				return res
					.status(200)
					.json({ msg: 'You have login successfully', token });
             }
             else{
                return res.status(404).json({ errors: [{ msg: 'Password is Incorrect !!' }] });
             }
        }
        else{
            return res.status(404).json({ errors: [{ msg: 'Email is not found' }] });
        }
        
        
    } catch (error) {
        return res.status(500).json({ errors: error });
    }
}