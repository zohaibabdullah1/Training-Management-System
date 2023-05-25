const express = require('express');
const Auth = require("../Controller/userController");
const Quiz = require("../Controller/quizController");
const Course = require("../Controller/courseController");
const tokenVerify = require("../middleware/tokenVerify");
const Route = express.Router();

Route.use(express.json());
Route.post("/register", Auth.UserRegister);
Route.post("/login", Auth.UserLogin);
Route.get("/user", tokenVerify.jwtVerifyToken, Auth.getAllUser);
Route.get("/user/:id", tokenVerify.jwtVerifyToken, Auth.getUser);
Route.put("/user/update/:id", tokenVerify.jwtVerifyToken, Auth.updateUser);
Route.delete("/user/delete/:id", tokenVerify.jwtVerifyToken, Auth.deleteUser);

Route.get("/quiz", tokenVerify.jwtVerifyToken, Quiz.getQuiz);
Route.post("/quiz/post", tokenVerify.jwtVerifyToken, Quiz.postQuiz);
Route.put("/quiz/update/:id", tokenVerify.jwtVerifyToken, Quiz.updateQuiz);
Route.delete("/quiz/delete/:id", tokenVerify.jwtVerifyToken, Quiz.deleteQuiz);

Route.get("/course", tokenVerify.jwtVerifyToken, Course.getAllCourse);
Route.post("/course/post", tokenVerify.jwtVerifyToken, Course.postCourse);
Route.put("/course/update/:id", tokenVerify.jwtVerifyToken, Course.updateCourse);
Route.delete("/course/delete/:id", tokenVerify.jwtVerifyToken, Course.deleteCourse);

module.exports = Route;