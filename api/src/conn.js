const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/api").then(()=>{
    console.log("db conn successful");
}).catch((e)=>{
    console.log(e);
})