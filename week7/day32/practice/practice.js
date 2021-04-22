const express = require('express')
const app = express();
const { readFile } = require("fs")
const PORT = 3030;

app.use(express.json());

app.get("/", (req, res) => {
    const message = "This that homepage, dawg"; 
        res.send(message);
})

app.get("/about", (req, res) => {
    const message = "This that about page, dawg"; 
        res.send(message);
})

app.get("/team", (req, res) => {
    const message = "This that team page, dawg"; 
        res.send(message);
})


app.post("/FAQ", (req, res) => {
    const message = "This that FAQ, dawg"; 
    res.send(message);
})


app.listen(PORT, () => {
    console.log(`Your server is being hosted on localhost:${PORT}`)
})