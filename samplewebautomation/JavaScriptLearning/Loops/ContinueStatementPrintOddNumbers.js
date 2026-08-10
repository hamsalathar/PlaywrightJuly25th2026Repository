/* print odd number between 20 to 40 using continue statement*/
let i=20;

while(i<=40)
{ 
    if(i%2==0)
    {   i++;
        continue;
    }
    console.log(i);
    i++;
}