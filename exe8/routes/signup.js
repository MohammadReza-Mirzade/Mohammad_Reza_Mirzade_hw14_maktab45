const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get("/", function (req, res){
    res.render("./pages/signup");
});

router.post("/", function (req, res){
    fs.readFile(path.join(__dirname, "../db/users.json"), 'utf8', function (err, data){
        let users = JSON.parse(data);
        let user = users.find(function (element){
            return element.user === req.body.user;
        });
        if (!user){
            console.log(req.body.email);
            user = {
                user: req.body.user,
                password: req.body.password,
                email: req.body.email,
                isLoggedIn: false
            }
            console.log(user);
            users.push(user);
            fs.writeFile(path.join(__dirname, "../db/users.json"), JSON.stringify(users), function (err){
                if (err) return console.log(err);
            });
            res.redirect("/login");
        } else {
            res.send("user");
        }
    });
});

module.exports = router;