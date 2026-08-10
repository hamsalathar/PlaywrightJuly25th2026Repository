let str ="Bangalore is Capital city of Karnataka";
let rev ="";
str = str.split(" ");


for(let i=0;i<str.length;i++)
{

    for(j=str[i].length-1;j>=0;j--)
    {
          rev = rev +str[i].charAt(j);
    }
    rev = rev + " ";
}
console.log(rev);
