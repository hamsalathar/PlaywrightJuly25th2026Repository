/*print below design pattern using method2
1 
12 
123 
1234 
12345
*/

for(let i=1;i<=5;i++){

    let pattern = " ";
    for(let j=1;j<=i;j++){

           pattern =pattern+j;
        }
        console.log(pattern + "\n");
}
console.log();