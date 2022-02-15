const Sequelize = require('sequelize');
const db = require('../../db');


module.exports =db.define('Questions',{
     id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
    question:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    option1:{  
        type:Sequelize.STRING,
        allowNull:false,
        unique:false
    },
    option2:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:false
    },
    option3:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    
    option4:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    answer:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    }
    
    
    
})