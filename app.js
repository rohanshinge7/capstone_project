const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/civilloan",{
    useNewUrlParser:true,
})
.then(()=>{console.log("Successfully to database")})
.catch((err)=>{
    console.log("Could Not connnect to database, Error",err);
    process.exit();
});

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.json({message:"server is running"})
})
require("./routes/serviceRoutes.js")(app);
require("./routes/memberRoutes.js")(app);
require("./routes/requestRoutes.js")(app);
let PORT = 8080;
app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
});