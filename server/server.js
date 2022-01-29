const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const db = require("./db.js");

app.use(compression());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.get("/works", (req, res) => {
    db.getWorks()
        .then(({ rows }) => {
            res.json(rows);
        })
        .catch((e) => {
            console.log("Error in getting works", e);
        });
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
