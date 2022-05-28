const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/quiz", (req, res) => {
    res.send("Page under development");
});

app.get("/developer", (req, res) => {
    res.render("developer");
});

app.get("*", (req, res) => {
    res.render("404");
})

app.listen(5500, () => {
    console.log("Server is started at port 5500");
});
