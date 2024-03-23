const mongoose = require("mongoose");
require("dotenv").config();

const DB = process.env.DATABASE_CLOUD.replace(/PASSWORD/g, process.env.PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to Database");
})
.catch((err) => {
    console.error("Error Connecting with Database", err);
});

module.exports = mongoose.connection;
