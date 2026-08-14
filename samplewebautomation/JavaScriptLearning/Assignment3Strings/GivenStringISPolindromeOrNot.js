let str = "madam";
let rev ="";
for(let i=str.length-1;i>=0;i--)
{
    rev =rev +str[i];
}
if(str==rev){
    console.log("given string is polindrome");
}else{
    console.log("given string is not polindrome");
}