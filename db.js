const sequelize = require('sequelize');
const db = new sequelize('oat','root','chiru',{
    host:"127.0.0.1",
    dialect:"mysql"
});

module.exports = db;