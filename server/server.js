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

app.get("/votes", (req, res) => {
    db.votesResult()
        .then(({ rows }) => {
            res.json(rows);
        })
        .catch((e) => {
            console.log("Error in getting votes", e);
        });
});

app.post("/techs", (req, res) => {
    const data = req.body;

    data.forEach((tech) => {
        if (tech === "html5") {
            db.voteTech("HTML5").then((result) => {
                res.json({ success: true, result: result });
            });
        } else if (tech === "css3") {
            db.voteTech("CSS3").then((result) => {
                res.json({ success: true, result: result });
            });
        } else if (tech === "javascript") {
            db.voteTech("JavaScript").then((result) => {
                res.json({ success: true, result: result });
            });
        } else if (tech === "jquery") {
            db.voteTech("jQuery").then((result) => {
                res.json({ success: true, result: result });
            });
        } else if (tech === "git") {
            db.voteTech("Git").then((result) => {
                res.json({ success: true, result: result });
            });
        } else if (tech === "github") {
            db.voteTech("GitHub").then((result) => {
                res.json({ success: true, result: result });
            });
        } else if (tech === "nodejs-express") {
            db.voteTech("Node.js & Express").then((result) => {
                res.json({ success: true, result: result });
            });
        } else if (tech === "aws") {
            db.voteTech("AWS").then((result) => {
                res.json({ success: true, result: result });
            });
        } else if (tech === "figma") {
            db.voteTech("Figma").then((result) => {
                res.json({ success: true, result: result });
            });
        } else if (tech === "typescript") {
            db.voteTech("TypeScript").then((result) => {
                res.json({ success: true, result: result });
            });
        } else if (tech === "postgresql") {
            db.voteTech("PostgreSQL").then((result) => {
                res.json({ success: true, result: result });
            });
        } else if (tech === "vuejs") {
            db.voteTech("Vue.js").then((result) => {
                res.json({ success: true, result: result });
            });
        } else if (tech === "jest") {
            db.voteTech("Jest").then((result) => {
                res.json({ success: true, result: result });
            });
        } else if (tech === "react") {
            db.voteTech("React").then((result) => {
                res.json({ success: true, result: result });
            });
        } else if (tech === "redux") {
            db.voteTech("Redux").then((result) => {
                res.json({ success: true, result: result });
            });
        }
    });
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
