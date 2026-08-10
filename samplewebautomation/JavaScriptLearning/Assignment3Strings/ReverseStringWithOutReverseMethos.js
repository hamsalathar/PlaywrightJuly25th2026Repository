
// using charAt()
let str1 = "hamsa";
let rev = "";
for(let i=str1.length-1;i>=0;i--)
{
    rev = rev+ str1.charAt(i);
}

console.log("reversed String is " +rev);


//using substring()

let str2= "jiyana";
let rev1="";
for(let i=str2.length-1;i>=0;i--)
{
    rev1 = rev1 +str2.substring(i,i+1);
}
console.log("reversed String is " +rev1);


//using slice

let str3 ="mahesh";
let rev2 = "";
for(let i=str3.length-1;i>=0;i--)
{
    rev2 = rev2 + str3.slice(i, i+1)
}
console.log("reversed String is " +rev2);
