const mongoose = require("mongoose");

const course = new mongoose.Schema({
    title: String,
    description: String,
    instructor: String
    // image: String
});

module.exports = mongoose.model("course", course);