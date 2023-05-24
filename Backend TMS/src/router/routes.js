const express = require('express');
const Auth = require("../Controller/userController");
const Quiz = require("../Controller/quizController");
const tokenVerify = require("../middleware/tokenVerify");
const Route = express.Router();

Route.use(express.json());
Route.post("/register", Auth.UserRegister);
Route.post("/login", Auth.UserLogin);
Route.get("/quiz", tokenVerify.jwtVerifyToken, Quiz.getQuiz);
Route.post("/quiz/post", tokenVerify.jwtVerifyToken, Quiz.postQuiz);
Route.put("/quiz/update/:id", tokenVerify.jwtVerifyToken, Quiz.updateQuiz);
Route.delete("/quiz/delete/:id", tokenVerify.jwtVerifyToken, Quiz.deleteQuiz);


module.exports = Route;