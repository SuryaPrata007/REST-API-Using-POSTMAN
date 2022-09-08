const express = require("express");
const Student = require("./students/students");
require("./conn");
const studentRouter = require("./routers/students");


const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(studentRouter);

//create student




app.listen(port, ()=>{
    console.log("successfully listen on 3000 port");
});