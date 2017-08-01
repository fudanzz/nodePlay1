var program = require("commander");
var prompt = require("prompt");

program.command('fire [msg]').description("this fire an event")
    .action(function (msg, options) {
        process.emit('gunfire', msg);
    })

process.on('gunfire', function (msg) {
    console.log('fired ' + msg);
})

program.command('react')
    .action(function (options) {
        var total_sec = 5;
        setInterval(function () {
            total_sec = --total_sec;
            console.log('only ' + total_sec + ' left');
        }, 1000);

        setTimeout(function () {
            console.log('sorry, time is up');
            process.exit();
        }, 1000 * total_sec);
    })

prompt.start();

prompt.get(['answer'],function(error,result){

});

program.parse(process.argv)
