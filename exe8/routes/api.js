const express = require('express');
const router = express.Router();
const error404 = require("./404");
const error500 = require("./500");


router.get('/', function (req, res){
    res.redirect('/home');
});
router.use(error500);
router.use(error404);


module.exports = router;