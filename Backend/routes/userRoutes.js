const app = require('express');
const router= app.Router();
const {register,registerValidation,loginValidation,login}= require('../controllers/userController')

router.post('/register',registerValidation,register)
router.post('/login',loginValidation,login)
module.exports=router;