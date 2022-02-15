const express = require('express');
const User = require('../models/Student');
const router = express.Router();

const homepage=async(req,res)=>{
     await res.render('home');
 }
 const adlogin=async(req,res)=>{
     await res.render('adminlogin');
 }
const stu=async(req,res)=>{
    await res.render('student');
}
const alogin=async(req,res)=>{
    var username = req.body.name;
    var password = req.body.password;

    if (username=='admin' && password == 'chiru') {
           // do something here with a valid login
           await res.render('adminhome');
    } else { 
        await res.redirect('adminlogin')
           // user or password doesn't match
    }
}
const sturegister = async(req,res)=>{
    await res.render('StudentRegister');
}
const savestu=async(req,res)=>{
    const{username,password,fullname,email,ssc_score,degree_score,city,phone_number}=await req.body;
    const stu=await User.create({
        username,password,fullname,email,ssc_score,degree_score,city,phone_number
    }).catch(error=>console.log(error));
    console.log(stu);
    res.redirect('StudentRegister')
}
 module.exports = {homepage,adlogin,stu,alogin,sturegister,savestu}
