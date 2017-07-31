#! /usr/bin/env node
var program=require("commander");
var prompt=require("prompt");

program.command('hi')
.description('just say hi')
.action(function(options){
    console.log('hello there');
})


program.command('start')
.description("start a car")
.action(function(options){
    console.log('start there');
     console.log('are you crzay?');
    prompt.start();

    prompt.get(['answer'],function(err,result){
        if(result.answer=="yes"){
             console.log('good answer');
        }else{
             console.log('not too bad');
        }
    })
})


program.parse(process.argv)