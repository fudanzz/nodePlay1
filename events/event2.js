const EventEmitter = require("events");

class MyEmitter extends EventEmitter{};

const myEmitter=new MyEmitter();

myEmitter.on('event',function(){
    console.log('received data: ');
});

myEmitter.on('event',function(){
    console.log('received data too ');
});


myEmitter.emit('event');
