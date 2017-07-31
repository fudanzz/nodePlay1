var http = require("http");
var express = require("express");
var morgan = require("morgan");
var path = require("path");

var app = express();

app.use(morgan("short"));

var staticPath = path.join(__dirname, "static");

app.use(express.static(staticPath));

var filePath = path.join(__dirname, "test.html");

app.use(function (request, response, next) {
    response.sendFile(filePath, function (err) {
        if (err) {
            next(new Error("error sending files"))
        }
    });
})

app.use(function (request, response) {
    response.status(404);
    response.end("file not find");
});

app.use(function (error, request, response, next) {
    console.error(error);
    response.status(500);
    response.end("file not find");
});


http.createServer(app).listen(3000, function () {
    console.log("server listens on port 3000");
})
