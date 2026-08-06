/* print like below pattren
12345
1234
123
12
1


*/

for(let i=5;i>=1;i--)

{
    let pattern = " ";
    for(let j=1;j<=i;j++)
    {
       pattern = pattern +j;
    }

    console.log(pattern +"\n");
}

console.log();