/**
 * Created by zhaozhong on 7/24/17.
 */

'use strict';

var express= require("express");

var app=express();

app.get("/",(request,response)=>{
    response.send("hi world");
})

app.listen(3000,()=>{
    console.log("express server listens on port 3000")
})