const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1');

const connectDB = () => {
    mongoose.connect(db, {
 
    }).then(() => console.log(`MongoDB is Connected`))
    .catch(err => {
        console.error(err.message);
        process.exit(1);
    });
};

module.exports = connectDB;