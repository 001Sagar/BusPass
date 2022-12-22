const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/BUS');
const db = mongoose.connection;
db.on('error',console.error.bind(console,'error in connecting to mongoDB'));

db.once('open',function(err){
    if(err){
        console.log(err);
    }
    console.log('Successfully connected to MongoDb::DataBase');
})
module.exports = db;

