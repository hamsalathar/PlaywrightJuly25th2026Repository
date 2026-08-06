/* Write a program to find sum of numbers in between 1 to 100 which are divisible by 10*/
let sum =0;
for(let i=1;i<=100;i++)
{
     if(i%10==0)
     {
        sum=sum+i;
       
     }
    
}
 console.log(sum);