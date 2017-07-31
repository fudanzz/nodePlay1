/**
 * Created by zhaozhong on 7/24/17.
 */

'use strict';

var http=require("http");

http.createServer(function(request,response){
    response.end("hellO world!yes");
}).listen(3000,()=>{
    console.log("serer start to listen on 3000")
});