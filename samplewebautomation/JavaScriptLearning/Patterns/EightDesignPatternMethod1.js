/* print below design pattern

5
54
543
5432
54321

*/

for(let i=5;i>=1;i--)
{
    let pattern = " ";

    for(j=5;j>=i;j--)
    {
           pattern = pattern +j;

    }
    console.log(pattern);
}

console.log();