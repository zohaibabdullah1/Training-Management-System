const userdata = require("../Model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.UserRegister = async (req, res) => {
    try {
        const hashed = bcrypt.hashSync(req.body.password, 10);
        const userData = new userdata({
            name: req.body.name,
            email: req.body.email,
            password: hashed,
        });

        await userData.save();
        res.json({

            message: "User Register"
        });
    } catch (error) {
        console.log(error);
        res.json({
            message: "User cannot be Register"
        });
    }
};

exports.UserLogin = async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        const userData = await userdata.findOne({ email: email });
        if (userData) {
            const compass = bcrypt.compare(password, userData.password);
            if (userData.email === email && compass) {
                jwt.sign({ name: userData.email }, "seckey", (err, token) => {
                    if (token) {
                        res.json({
                            message: "user successfully login ",
                            token,
                            userData
                        });
                    } else {
                        res.json({
                            message: "token cannot be created"
                        });
                    }
                });
            } else {
                res.json({
                    message: "plz enter your correct password"
                });
            }
        } else {
            res.json({
                message: "plz enter your correct email"
            });
        }
    } else {
        res.json({
            message: "plz enter all field"
        });
    }
};
