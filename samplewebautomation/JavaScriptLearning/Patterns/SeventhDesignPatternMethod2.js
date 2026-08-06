/*Print below Design pattern using method2
1
22
333
4444
55555

*/


for(let i=1;i<=5;i++){

    for(let j=1;j<=i;j++)
    {
        process.stdout.write(String(i));
    }
    console.log();
}