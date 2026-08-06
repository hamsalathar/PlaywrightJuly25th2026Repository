/* print like below pattren
12345
1234
123
12
1


*/

for(let i=5;i>=1;i--){

    for(let j=1;j<=i;j++)
    {
        process.stdout.write(String(j));
    }
    console.log();
}