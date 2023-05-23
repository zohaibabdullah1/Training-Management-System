const express=require('express');
const app=express();
const data=require('./data');
const dbConfig = require("./config");
const mongoose = require("mongoose");

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
    app.get("/", (req, res) => {
        res.send(data);
    });
app.get('/trainer',(req,res)=>{
    res.send("Hello, I'm Trainer")
});
app.get('/trainee',(req,res)=>{
    res.send("Hello, I'm Trainee of bootcamp")
});
app.listen(4000);