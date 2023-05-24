const mongoose = require("mongoose");

const userdata = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role:String
});

module.exports = mongoose.model("user", userdata);