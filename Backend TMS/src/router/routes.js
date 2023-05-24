const express = require('express');
const Auth = require("../Controller/userController");
const quiz = require("../Controller/quizController")
const Route = express.Router();

Route.use(express.json());
Route.post("/register", Auth.UserRegister);
Route.post("/login", Auth.UserLogin);
Route.post("/quiz", quiz.Quiz);

module.exports = Route;