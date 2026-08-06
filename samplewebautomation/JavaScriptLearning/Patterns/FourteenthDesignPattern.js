/*
A
B C
D E F
G H I J
K L M N O

*/
    
let ch =65;
for(let i=1;i<=5;i++)

    {

        let pattern = " ";
    

        for(let j=1;j<=i;j++)
        {
            pattern = pattern +  String.fromCharCode(ch) + " " ;
            ch++;
        }
 
        console.log(pattern);
       
    }
    console.log();

    