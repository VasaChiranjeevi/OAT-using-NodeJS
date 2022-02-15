const express = require('express');
const Questions = require('../models/Questions');
const AllQuetions=async(req,res)=>{
    const que= await questions.findAll({
        raw:true
    }).catch(error=>console.log(error))
    await res.render("SelectQuestions",{que})    
}
const addques = async(req,res)=>{
    await res.render('addquestions');
}
const addquestions=async(req,res)=>{
    const{question,option1,option2,option3,option4,answer}=await req.body;
    const que=await Questions.create({
        question,option1,option2,option3,option4,answer
    }).catch(error=>console.log(error));
    console.log(que);
    res.redirect('addquestions')
}
module.exports = {AllQuetions,addquestions,addques}