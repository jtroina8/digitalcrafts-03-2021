const express = require('express');
const app = express();
const { readFile } = require("fs")
const PORT = 3001;

//routes
// 1 Default page aka /
// 2 home page 
// 3 about page 
// 4 FAQ

app.get("/",(req, res) => {
    const message = "Welcome to my page"; 
    res.send(message); 
});
app.get("/home",(req,res) => {
    const message = "Welcome to my home"; 
    res.send(message);
})
app.get("/about",(req,res) => {
    const message = "Welcome to my about"; 
    res.send(message);
})
app.get("/FAQ",(req,res) => {
    const message = "Welcome to my FAQ"; 
    res.send(message);
})

// Star(*) will work for any page that you don't specifiy
app.get("*", (req, res) => {
    const message = "Uh oh, this page is not real 🤭";
    readFile("./index.html", "utf8", (err, html) => {
      res.send(html);
    });
  });

  app.post("/messages",(res,req) => {
      const {logo, name} = req.body
      const message = `Your logo is ${logo} and it is called ${name}`
  });

app.listen(PORT, () => {
    console.log(`Your server is being hosted on localhost:${PORT}`); 
})
