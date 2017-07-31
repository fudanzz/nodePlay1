var express = require("express");
var http = require("http");
var path = require("path");

var app = express();
var staicPath = path.resolve(__dirname, "static");

console.log("staic path at: " + staicPath);

app.use(express.static(staicPath));

app.get("/", function (request, response) {
    response.end("this is my home page");
})

app.get("/about", function (request, response) {
    response.end("this is about page");
})

app.get("/weather", function (request, response) {
    response.end("this is weather page");
})

app.use(function (request, response) {
    response.statusCode = 404;
    response.end("404!")
});

http.createServer(app).listen(3000);
