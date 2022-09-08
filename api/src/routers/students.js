const express = require("express");
const router = new express.Router();
const Student = require("../students/students");


//we need to defien our router
router.post("/students",(req,res)=>{
    const user = new Student(req.body);
    user.save().then(()=>{
     res.send(user);
    }).catch((e)=>{
     res.send(e);
    })
     
 });
 
 //get all students
 router.get("/students", async(req,res)=>{
     try{
     const getStudents = await Student.find();
     console.log(getStudents);
     res.send(getStudents);
     }catch(e){
         res.send(e);
     }
 });
 
 //get specific user by id
 // router.get("/students/:id", async(req,res)=>{
 //     try{
 //         const _id = req.params.id;
 //     const specificUser = await Student.findById(_id);
 //     console.log(specificUser);
 //     res.send(specificUser);
 //     }catch(e){
 //         res.send(e);
 //     }
 // })
 
 //get specific user by name
 router.get("/students/:name", async(req,res)=>{
     try{
         const name = req.params.name;
     const specificUser = await Student.findOne({name:name});
     console.log(specificUser);
     res.send(specificUser);
     }catch(e){
         res.send(e);
     }
 });
 
 //delete student by id
 router.delete("/students/:id", async(req,res)=>{
     try{
         const _id = req.params.id;
     const deleteStudent = await Student.findByIdAndDelete(_id);
     console.log(deleteStudent);
     res.send(deleteStudent);
     }catch(e){
         res.send(e);
     }
 });
 
 router.patch("/students/:id", async(req,res)=>{
     try{
         const _id = req.params.id;
     const updateStudent = await Student.findByIdAndUpdate(_id,req.body);
     console.log(updateStudent);
     res.send(updateStudent);
     }catch(e){
         res.send(e);
     }
 });

 module.exports = router;