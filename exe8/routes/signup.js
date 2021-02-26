const express = require('express');
const router = express.Router();

router.get("/", function (req, res){
    res.render("./pages/signup");
});

router.post("/", function (req, res){
    fs.readFile(path.join(__dirname, "../public/data/users.json"), 'utf8', function (err, data){
        let user = JSON.parse(data).find(function (element){
            return element.user === req.body.user;
        });
        if (!user){
            fs.wr
            res.redirect("/login");
        } else {
            res.send("user");
        }
    });
});

module.exports = router;