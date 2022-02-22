const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const db = require("./db.js");
const { sendEmail } = require("./ses.js");
const cookieSession = require("cookie-session");

app.use(compression());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "client", "public")));
app.use(
    cookieSession({
        // secret: secretcookie.cookieSecret,
        secret: "aB3ErT5F6&5F",
        maxAge: 1000 * 60 * 60 * 24 * 14,
        sameSite: true,
    })
);

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
    if (req.session.voted === true) {
        res.json({ succes: false });
    } else {
        data.forEach((tech) => {
            if (tech === "html5") {
                db.voteTech("HTML5").then((result) => {
                    req.session.voted = true;
                    res.json({ success: true, result: result });
                });
            } else if (tech === "css3") {
                db.voteTech("CSS3").then((result) => {
                    req.session.voted = true;
                    res.json({ success: true, result: result });
                });
            } else if (tech === "javascript") {
                db.voteTech("JavaScript").then((result) => {
                    req.session.voted = true;
                    res.json({ success: true, result: result });
                });
            } else if (tech === "jquery") {
                db.voteTech("jQuery").then((result) => {
                    req.session.voted = true;
                    res.json({ success: true, result: result });
                });
            } else if (tech === "git") {
                db.voteTech("Git").then((result) => {
                    req.session.voted = true;
                    res.json({ success: true, result: result });
                });
            } else if (tech === "github") {
                db.voteTech("GitHub").then((result) => {
                    req.session.voted = true;
                    res.json({ success: true, result: result });
                });
            } else if (tech === "nodejs-express") {
                db.voteTech("Node.js & Express").then((result) => {
                    res.json({ success: true, result: result });
                    req.session.voted = true;
                });
            } else if (tech === "aws") {
                db.voteTech("AWS").then((result) => {
                    res.json({ success: true, result: result });
                    req.session.voted = true;
                });
            } else if (tech === "figma") {
                db.voteTech("Figma").then((result) => {
                    req.session.voted = true;
                    res.json({ success: true, result: result });
                });
            } else if (tech === "typescript") {
                db.voteTech("TypeScript").then((result) => {
                    req.session.voted = true;
                    res.json({ success: true, result: result });
                });
            } else if (tech === "postgresql") {
                db.voteTech("PostgreSQL").then((result) => {
                    res.json({ success: true, result: result });
                    req.session.voted = true;
                });
            } else if (tech === "vuejs") {
                db.voteTech("Vue.js").then((result) => {
                    req.session.voted = true;
                    res.json({ success: true, result: result });
                });
            } else if (tech === "jest") {
                db.voteTech("Jest").then((result) => {
                    req.session.voted = true;
                    res.json({ success: true, result: result });
                });
            } else if (tech === "react") {
                db.voteTech("React").then((result) => {
                    req.session.voted = true;
                    res.json({ success: true, result: result });
                });
            } else if (tech === "redux") {
                db.voteTech("Redux").then((result) => {
                    req.session.voted = true;
                    res.json({ success: true, result: result });
                });
            }
        });
    }
});

app.post("/sendmail", (req, res) => {
    const data = req.body;
    let email;
    const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    
    if (data.email.match(regex)) {
        email = data.email;
    }

    if (email) {
        sendEmail(
            "gabrielcmoris@gmail.com",
            "I had an email from my portfolio",
            `Email: \n ${email} \n\n Name: \n ${data.name} \n\n Message: \n ${data.message}`
        ).then(() => {
            res.json({ success: true });
        });
    } else {
        res.json({ success: false });
    }
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
