/**
 * Created by zhaozhong on 7/24/17.
 */

'use strict';

var http = require("http");
var express = require("express");

var app = express();

app.use(function (request, response, next) {
    console.log("in comes request " + request.method + " to " + request.url);
    next();
});

app.use(function (request, response, next) {
    var minutes = (new Date()).getMinutes();
    if (minutes % 2 == 0) {
        next();
    } else {
        response.statusCode = 401;
        response.end("not authorized");
    }
});

app.use(function (request, response) {
    response.writeHeader(200, {
        "Content-Type": "text/tplain"
    })
    response.end("hi there");
});


http.createServer(app).listen(3000, () => {
    console.log("server listen on port 3000");
});
