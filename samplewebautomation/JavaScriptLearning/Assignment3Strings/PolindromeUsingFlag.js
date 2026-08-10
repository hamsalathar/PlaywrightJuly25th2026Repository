const { monitorEventLoopDelay } = require("node:perf_hooks");

let str = "madam";
let isPolindrom = true;
let rev= "";

for(let i=str.length-1;i>=0;i--)
{
        rev = rev+str[i];
}

if(str != rev){
    isPolindrom = false;
}

if(isPolindrom)
{
    console.log("the given string is polindrome");
}else{
    console.log("the give string is not polindrome");
}