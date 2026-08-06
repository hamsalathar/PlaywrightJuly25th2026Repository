/*

1
3 5 
7 9 11
13 15 17 19
21 23 25 27 19
 
*/
    
    let num =1;

for(let i=1;i<=5;i++)
{
    let pattern = " "
    for(let j=1;j<=i;j++)
    {
        pattern =pattern+num;
        num = num+2;
        
    }
    

    console.log(pattern);

}
console.log();