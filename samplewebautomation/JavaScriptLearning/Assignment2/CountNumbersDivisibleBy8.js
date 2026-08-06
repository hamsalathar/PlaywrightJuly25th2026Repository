/* Write a program to find count of numbers in between 1 to 100 which are divisible by 8*/

let count =0;

for(let i=1;i<=100;i++)
{
    if(i%8==0){
          count++;
    }
   
}

console.log(count);