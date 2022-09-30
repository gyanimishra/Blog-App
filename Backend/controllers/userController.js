
const { body, validationResult } = require('express-validator');

module.exports.registerValidation=[
    body("name").not().isEmpty().trim().withMessage("Name is reuired!"),
    body("email").not().isEmpty().trim().withMessage("Email is reuired!"),
    body("password").isLength({min:6}).withMessage("Password must be 6 digit!")
]

module.exports.register= (req,res)=>{
    const {name,email,password}= req.body;

    const errors =validationResult(req);
    if(!errors.isEmpty()){
         res.json(errors.array())
    }
    else{
        res.json("Congratulatios You have done successfully!")
    }

}