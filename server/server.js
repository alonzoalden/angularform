var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")
var app = express();


//use part for middle layers
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

app.get('/api/contact', function(req, res, next) {
    res.send('COMPLETE');
});

var port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, '../')));

app.listen(port, function() {
    console.log("Listening on " + port);
});