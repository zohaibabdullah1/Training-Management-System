const mongoose = require("mongoose");

const instructor = new mongoose.Schema({
    name: String,
    qualification: String,
    course: String
    // image: String
});

module.exports = mongoose.model("instructor", instructor);