function hello() {
    console.log("before hello");
    setTimeout(function(){
        console.log("hi there");
    },2000);

    setImmediate(function(){
        console.log("hello first");
    })

    console.log("after hello");
};

hello();