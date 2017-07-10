var express = require("express");

var app = express();

app.get('/', function (req, res) {
    res.send(`Hello! ${req.query.name}`);
});

app.listen(5001, function () {
    console.log(`Listening on port ${5001}!`);
});