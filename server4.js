var express = require("express");
var http = require("http");
var path = require("path");

var app = express();
var staicPath = path.resolve(__dirname, "static");

console.log("staic path at: " + staicPath);

app.use(express.static(staicPath));

app.use(function (request, response) {
    response.end("look like you don't find your're looking for");
});

http.createServer(app).listen(3000);
