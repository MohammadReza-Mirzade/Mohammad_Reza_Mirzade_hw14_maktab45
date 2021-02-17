var express = require('express');
var app = express();
var path = require("path")
var fs = require("fs")

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    fs.readFile(path.join(__dirname, "public/data.json"), "utf8", function (err, data) {
        if (err) return res.status(400).send("ERROR");
        console.log(data)
        res.render("index.ejs", JSON.parse(data));
    });
});

app.listen(8080);
console.log('server started.');