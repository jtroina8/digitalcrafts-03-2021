const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3005;
const pool = require("./db.js");
console.log(PORT);

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.get("/", (req,res) => {
    res.send("Welcome to the home page, cash money dollar bills")
})

app.get("/list", (req,res) => {
    res.send("This is what you should be doing.")
})

app.post("/complete", (req,res) => {
    res.send("This is the list of assignments you've already sent")
})

app.delete("/list/:id", (req,res) => {
    res.send("These are things you've deleted.")
})

app.listen(PORT, () => {
    console.log(`Port is ${PORT}`)
})


