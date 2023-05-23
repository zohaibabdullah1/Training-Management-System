const express = require('express');
const Auth = require("../Controller/userController");
const Route = express.Router();

Route.use(express.json());
Route.post("/register", Auth.UserRegister);
Route.post("/login", Auth.UserLogin);

module.exports = Route;