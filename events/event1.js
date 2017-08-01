const EventEmitter = require("events");

class MyEmitter extends EventEmitter{};

const myEmitter=new MyEmitter();

myEmitter.on('event',function(data){
    console.log('received data: '+data);
});

myEmitter.emit('event','dd');

