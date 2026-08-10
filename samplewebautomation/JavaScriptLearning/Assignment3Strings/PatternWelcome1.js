let str = "welcome";
          

for(let i=str.length-1;i>=0;i--)  
{
    let pattern ="";
    for(let j=0;j<=i;j++)
    {
        pattern =pattern+str.charAt(j);
        
    }

    console.log(pattern);
}
console.log();