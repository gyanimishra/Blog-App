const express= require('express')
var bodyParser = require('body-parser')
require('dotenv').config()
const app= express();
const connectoMongo= require('./config/db')
const router =require('./routes/userRoutes')
//connect to database........
connectoMongo()


//connect to middlewares......
app.use(bodyParser.json())


//connect to routes..........
  app.use('/',router)





  //connect to server.........

const PORT= process.env.PORT  || 5000

app.listen(PORT,()=>{
    console.log(`app is running successfuly on ${PORT}`);
})