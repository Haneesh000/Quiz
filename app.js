const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/quiz", (req, res) => {
    res.render("quiz");
});

app.get("/developer", (req, res) => {
    res.render("developer");
});

app.post("/quiz", (req, res) => {
    const value1 = req.body.questiononeblank;
    const value2 = req.body.questiontwoblank;
    const value3 = req.body.questionthreeblank;
    const value4 = req.body.questionfourblank;
    const value5 = req.body.questionfiveblank;

    var score = 0;

    if(_.lowerCase(value1) == _.lowerCase("is")) {
        score += 1;
    }
    if(_.lowerCase(value2) == _.lowerCase("loves")) {
        score += 1;
    }
    if(_.lowerCase(value3) == "best") {
        score += 1;
    }
    if(_.lowerCase(value4) == "is") {
        score += 1;
    }
    if(_.lowerCase(value5) == _.lowerCase("is coming back")) {
        score += 1;
    }

    res.render("results", {marks: score, maxMarks: 5})
});

app.get("*", (req, res) => {
    res.render("404");
});

app.listen(process.env.PORT || 5500, () => {
    console.log("Server is started at port 5500");
});
