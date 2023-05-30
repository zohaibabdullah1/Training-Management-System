const express = require('express');
const Auth = require("../Controller/userController");
const Quiz = require("../Controller/quizController");
const Course = require("../Controller/courseController");
const Instructor = require("../Controller/InstructorController");
const tokenVerify = require("../middleware/tokenVerify");
const Route = express.Router();

Route.use(express.json());
Route.post("/register",Auth.upload.single("image"), Auth.UserRegister);
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
Route.get("/course/:id", tokenVerify.jwtVerifyToken, Course.getCourse);
Route.post("/course/post", Course.upload.single("image"), tokenVerify.jwtVerifyToken, Course.postCourse);
Route.put("/course/update/:id", tokenVerify.jwtVerifyToken, Course.updateCourse);
Route.delete("/course/delete/:id", tokenVerify.jwtVerifyToken, Course.deleteCourse);

Route.get("/instructor", tokenVerify.jwtVerifyToken, Instructor.getAllInstructor);
Route.get("/instructor/:id", tokenVerify.jwtVerifyToken, Instructor.getInstructor);
Route.post("/instructor/post", Instructor.upload.single("image"), tokenVerify.jwtVerifyToken, Instructor.postInstructor);
Route.put("/instructor/update/:id", tokenVerify.jwtVerifyToken, Instructor.updateInstructor);
Route.delete("/instructor/delete/:id", tokenVerify.jwtVerifyToken, Instructor.deleteInstructor);

module.exports = Route;