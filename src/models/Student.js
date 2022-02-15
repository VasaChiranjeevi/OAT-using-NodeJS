const Sequelize = require('sequelize');
const db = require('../../db');


module.exports =db.define('Student',{
     id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
    username:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    password:{  
        type:Sequelize.STRING,
        allowNull:false,
        unique:false
    },
    fullname:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    
    ssc_score:{
        type:Sequelize.INTEGER,
        allowNull:false,
        unique:true
    },
    degree_score:{
        type:Sequelize.INTEGER,
        allowNull:false,
        unique:true
    },
    phone_number:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    city:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    }
    
    
    
})