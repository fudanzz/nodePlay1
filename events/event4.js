const EventEmitter = require("events");

class MyEmitter extends EventEmitter{};

const myEmitter=new MyEmitter();

myEmitter.on('event',function(){
    setImmediate(()=>{
        console.log("call in emmiediate");
    })
});

myEmitter.on('event',function(){
   setTimeout(()=>{
console.log("call in timeout");
   },5);
});
 
myEmitter.on('event',function(){
    process.nextTick(()=>{
        console.log("call in next Tick");
    })
});

myEmitter.emit('event');
