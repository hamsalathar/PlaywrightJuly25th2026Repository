/*

print below design pattern using method2
1 
12 
123 
1234 
12345

*/

for(let i=1;i<=5;i++)
{
    for(let j=1;j<=i;j++){
        process.stdout.write(String(j));
    }
    console.log();
}