var program = require("commander");
var through = require("through2");

program.command('echo')
    .description("this fire an event")
    .action(function (options) {
        var tru=through(function(buf,_,next){
            this.push(buf.toString().toUpperCase());
            next();
        })
        process.stdin.pipe(tru).pipe(process.stdout);
    })

program.parse(process.argv)
