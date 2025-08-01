const mongoose = require("mongoose");

exports.connect = () => {
    // Use environment variable or fallback to local MongoDB
    const dbUrl = process.env.MONGODB_URL || "mongodb://localhost:27017/studynotion";
    
    mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connection Success"))
    .catch((error) => {
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    });
};