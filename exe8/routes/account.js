const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.use("/:user", function (req, res, next){
    fs.readFile(path.join(__dirname, "../public/data/users.json"), 'utf8', function (err, data) {
        let user = JSON.parse(data).find(function (element) {
            return element.user === req.params['user'];
        });
        if (!user){
            return res.render('pages/404');
        }else {
            if (user.isLoggedIn) {
                next();
            } else {
                return res.render('pages/haventPermission');
            }
        }
    });
});

router.get('/:user', function (req, res){
    fs.readFile(path.join(__dirname, "../public/data/users.json"), 'utf8', function (err, data) {
        let user = JSON.parse(data).find(function (element) {
            return element.user === req.params['user'];
        });
        res.render('pages/account', {user:user});
    });
});

module.exports = router;