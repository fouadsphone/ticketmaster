/*
File Name - db.js
Student Name - Ronak Barochia
Student ID - 301239977
*/


let DB_CONNECTION = "mongodb+srv://user:user@ticketmaster.wjjned4.mongodb.net/test"

//database setup
let mongoose = require('mongoose');



module.exports = function(){
    
    //connect to DB
    mongoose.connect(DB_CONNECTION);

    let mongoDB = mongoose.connection;
    mongoDB.on('error', console.error.bind(console,'connection error :  '));
    mongoDB.once('open',()=>{
        console.log('conected to MongoDB...');
    }) 

    return mongoDB;
}

