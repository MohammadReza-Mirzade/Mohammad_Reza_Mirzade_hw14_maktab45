const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');


router.use("/", function (req, res){
    fs.readFile(path.join(__dirname, "../public/data/data.json"), "utf8", function (err, data) {
        if (err){return res.status(500).render('pages/500')};
        res.render("./pages/home", {products:JSON.parse(data)});
    });
});


module.exports = router;