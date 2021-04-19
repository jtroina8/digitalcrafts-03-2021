const http = require("http")
const express = require("express")
const app = express()
const address = "127.0.0.1"
const PORT = 3002
const {readFile} = require("fs")

app.use(express.json());

// destructuring

app.get("/", (req, res) => {
    readFile("./index.html","utf8", (html) => {
        res.send(html)
    })
})

app.get("/home", (req, res) => {
    readFile("./homepage.html","utf8", (html) => {
        res.send(html)
    })
})


app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
});




// const server = http.createServer((request, response) => {
//     response.statusCode = 200
//     response.setHeader("Content-Type", "text/plain");
//     response.end("hello");
// });


