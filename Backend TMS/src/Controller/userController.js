const userdata = require("../Model/UserModel");
const bcrypt = require("bcrypt");
const path = require("path");
const multer = require("multer");
const jwt = require("jsonwebtoken");

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./src/images/users");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

exports.upload = multer({ storage: storage });

exports.UserRegister = async (req, res) => {
    try {
        const url = path.join(
            "E:/JS/Contour/React/Training-Management-System/Backend TMS/src/images/users/" + req.file.filename
        );
        const hashed = bcrypt.hashSync(req.body.password, 10);
        const userData = new userdata({
            name: req.body.name,
            email: req.body.email,
            password: hashed,
            image: url,
            role:req.body.role
        });

        await userData.save();
        res.status(200).json({
            message: "User Register"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "User cannot be Register"
        });
    }
};

exports.UserLogin = async (req, res) => {
    const { email, password,role } = req.body;
    if (email && password && role) {
        const userData = await userdata.findOne({ email: email });
        if (userData) {
            const compass = await bcrypt.compare(password, userData.password);
            if (userData.email === email && compass && userData.role===role) {
                jwt.sign({ name: userData.email }, "seckey", (err, token) => {
                    if (token) {
                        res.status(200).json({
                            message: "user successfully login ",
                            token,
                            userData
                        });
                    } else {
                        res.status(400).json({
                            message: "token cannot be created"
                        });
                    }
                });
            } else {
                res.status(400).json({
                    message: "please enter your correct password"
                });
            }
        } else {
            res.status(400).json({
                message: "please enter your correct email"
            });
        }
    } else {
        res.status(400).json({
            message: "please enter all field"
        });
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await userdata.findOne({ _id: req.params.id});
        res.status(200).send(user);
    } catch (error) {
        res.status(400).json({
            message: "no data found",
            error
        });
    }
};
exports.getAllUser = async (req, res) => {
    try {
        const allUser = await userdata.find();
        res.status(200).send(allUser);
    } catch (error) {
        res.status(400).json({
            message: "no data found",
            error
        });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { name, email} = req.body;
        const updatingUser = await userdata.findOne({
            _id: req.params.id
        });
        if (name) {
            updatingUser.name = name;
        }
        if (email) {
            updatingUser.email = email;
        }

        await updatingUser.save();
        console.log(updatingUser)
        res.status(200).json({
            message: "User Update Successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "we cannot find data against this User ID"
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const deleteUser = await userdata.deleteOne({
            _id: req.params.id
        });
        await deleteUser.delete();
        res.status(200).json({
            message: "Delete User Successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "we cannot find data against this User ID"
        });
    }
};
