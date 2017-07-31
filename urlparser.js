/**
 * Created by zhaozhong on 7/24/17.
 */

'use strict';


var urlParser=require("url");

var parsedURL=urlParser.parse("http://www.google.com?profile=zz");
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);
