/* print below design pattern

5
54
543
5432
54321

*/

for(let i=5;i>=1;i--)
{
    for(let j=5;j>=i;j--)
    {
        process.stdout.write(String(j));

    }
    console.log();
}