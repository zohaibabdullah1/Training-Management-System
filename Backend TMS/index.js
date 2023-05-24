const express=require('express');
const app=express();
const dbConfig = require("./config");
const mongoose = require("mongoose");
const cors = require('cors')
const Router = require('./src/router/routes');

const DB = `mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`;
mongoose.set("strictQuery", false);
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Mongo DB connected");
    })
    .catch((err) => {
        console.log("ERROR in connecting DB", err);
    });

    app.use(express.json());
    app.use(cors());
    app.use("/",Router);
app.listen(4000,()=>{
    console.log('Server is Running on Port 4000')
});