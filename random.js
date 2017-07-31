var express = require("express");

var app = express();


app.get("/random/:min/:max", function (request, response) {

    var min = parseInt(request.params.min);
    var max = parseInt(request.params.max);


    if (isNaN(min) || isNaN(max)) {
        response.status(400);
        response.json({
            error: "bad request"
        });
    }


    var result = Math.round(Math.random() * (max - min) + min);

    var i = 0;

    while (i < 100000) {
        i++;
    }
    response.json({
        result: result
    });
});




app.listen(3000, function () {
    console.log("app start on port 3000");
});
