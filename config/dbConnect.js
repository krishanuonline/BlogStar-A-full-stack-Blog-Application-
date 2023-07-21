const mongoose = require("mongoose");

const dbConnect = async ()=>{
    
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database Connected");
    } catch (error) {
        console.log("Database faild to connect"+error.message); 
    }
}
dbConnect();

// this run automatically
// module.exports = dbConnect;