let str="Welcome";

for(let i=0;i<str.length;i++)
{
     let pattern="";
    for(let j=0;j<=i;j++)
    {

        pattern =pattern+str.charAt(j);
      
    }

    console.log(pattern);
}
console.log();