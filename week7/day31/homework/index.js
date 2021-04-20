const express = require('express');
const app = express(); 
const { readFile } = require("fs") 
const PORT = 3001;

app.use(express.static("public"))

app.get("/",(req,res) => {
    readFile("index.html", "utf8", (err, html) => {
        res.send(html);
    })
    // const message = "Hello my first node server!";
    // res.send(message);
})

app.get("/store", (req,res) => {
    readFile("store.html", "utf8", (err, html) => {
        res.send(html);
    })
})

app.get("/contact", (req,res) => {
    readFile("contact.html", "utf8", (err, html) => {
        res.send(html);
    })
})

app.listen(PORT, () => {
    console.log(`Your server is being hosted on localhost:${PORT}`)
})

