const express = require('express');
const app = express();
const { readFile } = require("fs")
const PORT = 3002;

app.get("/", (req, res) => {
    const message = "This is the first page you'll see"
    res.send(message); 
}); 
app.get("/second", (req, res) => {
    const message = "This is the second page you'll see"
    res.send(message); 
}); 
app.get("/third", (req, res) => {
    const message = "This is the third page you'll see"
    res.send(message); 
}); 
app.get("/last", (req, res) => {
    const message = "This is the last page you'll see"
    res.send(message); 
}); 
app.get("/boo", (req, res) => {
    const message = "Look Behind You."
    res.send(message); 
}); 
app.get("/*", (req, res) => {
    const message = "AHHHHHHHHHHHH."
    res.send(message); 
}); 

app.listen(PORT, () => {
    console.log(`Your server is being hosted on localhost:${PORT}`); 
})