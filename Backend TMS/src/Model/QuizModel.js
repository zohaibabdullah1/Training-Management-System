const mongoose = require("mongoose");

const quiz = new mongoose.Schema({
    question: String,
    answer: String,
    opt1: String,
    opt2: String,
    opt3: String,
    opt4: String
});

module.exports = mongoose.model("quiz", quiz);