const mongoose = require('mongoose')

require('dotenv').config()

module.exports= connect= async ()=>{
     try {
        const res= await mongoose.connect(process.env.URL,{useUnifiedTopology:true,useNewUrlParser:true})
        console.log("database connected succesfuly");
     } catch (error) {
        console.log(error);
     }
}