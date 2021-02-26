const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', function (req, res){
    res.render('pages/login');
});


router.post("/", function (req, res){
    fs.readFile(path.join(__dirname, "../public/data/users.json"), 'utf8', function (err, data){
        let userIndex = JSON.parse(data).findIndex(function (element){
            return element.user === req.body.user;
        });
        if (!JSON.parse(data)[userIndex]){
            res.send("user");
        } else {
            if (req.body.password === JSON.parse(data)[userIndex].password) {
                let data1 = JSON.parse(data);
                data1.pop(userIndex);
                let user = JSON.parse(data)[userIndex];
                user.isLoggedIn = true;
                data1.push(user);
                console.log(data1);
                fs.writeFile(path.join(__dirname, "../public/data/users.json"), JSON.stringify(data1), function (err){
                    if (err) return console.log(err);
                });
                res.send("/account/"+JSON.parse(data)[userIndex].user);
            } else {
                res.send("password");
            }
        }
    });
});

module.exports = router;