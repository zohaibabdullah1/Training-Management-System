const mongoose = require("mongoose");

const userdata = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model("user", userdata);


// const mongoose = require("mongoose");
// const UserModel = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//             require: true
//         },
//         email: {
//             type: String,
//             require: true
//         },
//         password: {
//             type: String,
//             require: true
//         }
//     },
//     { timestamps: true }
// );
// module.exports = mongoose.model("user", UserModel);