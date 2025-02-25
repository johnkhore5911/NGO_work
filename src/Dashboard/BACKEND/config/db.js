const mongoose = require("mongoose");

const connectdb = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI_New);
        console.log("Mongodb Connected Successfully!");
    } catch(error){
        console.error("connection failed:",error);
        process.exit(1);
    }
};
module.exports = connectdb;