var util = require("util");
var greetings = ["hi", "hey", "nice meeting you"];

process.argv.slice(2).forEach(function (val, index, array) {

    if (greetings.indexOf(val) > -1) {
        console.log("hi, what can i do for you");
    } else if (val.indexOf("input") > -1) {
        process.stdin.resume();
        process.stdin.setEncoding("utf8");
        process.stdin.on('data',function(text){
            console.log("received data: " + util.inspect(text));
            if(text==='quit\n'){
                done();
            }

            function done(){
                console.log("done!");
                process.exit();
            }
        })
    } else {
        console.log("sorry, cannot help you");
    }

});