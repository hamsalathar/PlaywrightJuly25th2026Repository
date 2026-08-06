
/* Write a program to display first 10 Fibonacci numbers?*/
let prev =0;
let current =1;


for(let i=0;i<10;i++)
{
    console.log(prev);
   let next = prev+current;
    prev = current;
    current= next;
}
