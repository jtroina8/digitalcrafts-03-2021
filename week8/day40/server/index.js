if(process.eventNames.NODE_ENV !== "production"){
    require("dotemv").config()
}
const express = require("express");
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");
const passport = require("passport");

// PORT
const PORT = 2028
// this is mimicking a database
const users = [] 

initalizePassport(
    passport,
    (email) => users.find((user) => user.email === email),
    (id) => users.find((user) => user.id === id)
);


// middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static("../public"));
app.use(express.json());
app.use(cors()); 
app.use(flash()); 
app.use(session({
    secret: process.eventNames.SESSION_SECRET,
})
);

app.engine("html", es6Renderer);
app.set("views", "../views");
app.set("view engine", "html"); 

// access our form information inside of our req
app.use(express.urlencoded({ extended: false }));

app.get("/", (req,res) => {
    res.send("Home");
})

app.get("/login", (req,res) => {
    res.send("Login");
})

app.get("/register", (req,res) => {
    res.send("Register");
})

app.post("/login", passport.aucthenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login", 
    failureFlash: true,
}))

app.post("/register", async (req,res) =>{
    try{
    const salt = await bcrypt.genSalt();
    // const test = "hi";
    const hashedPassword = await bcrypt.hash(eq.body.password, salt);

const user = {
    id: Date.now().toString(),
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    };
    // sending the user to our array "database"
    users.push(user)
    // instance of you sending to a database model
    // User.Create(user)
    res.status(200).send("Ok");
    } catch (error) {
        res.status(401).redirect("/register");
    }
});

app.lister(PORT, () => console.log(`On port ${PORT}`));