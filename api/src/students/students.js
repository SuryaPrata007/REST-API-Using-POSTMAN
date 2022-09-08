const mongoose = require("mongoose");
const validator = require("validator");

//schema of student db
const studentsSchema = new mongoose.Schema({
   name : {
    type:String,
    required: true,
    minlength:3
   },
   email : {
    type:String,
    required:true,
    unique:[true, "email already exist"],
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error("Invalid email");
        }
    }
   },
   phone : {
    type:Number,
    min:10,
    unique:true
   },
   address :{
    type:String,
    required:true
   }

});

//creation of collection
const Student = new mongoose.model('Student',studentsSchema);

//export the student method
module.exports = Student;