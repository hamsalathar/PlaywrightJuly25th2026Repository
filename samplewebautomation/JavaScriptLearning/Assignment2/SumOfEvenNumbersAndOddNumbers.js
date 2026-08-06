
/*Write a program to find sum of even numbers and sum of odd numbers in between 1 to 500*/

let evenSum=0;
let oddSum=0;
for(let i=1 ;i<=500;i++)
{
    if (i%2==0){
        evenSum = evenSum+i;
    }else if(i%2 !=0){
         oddSum = oddSum+i;
    }
}

console.log("Sum of even number is " +evenSum);
console.log("Sum of odd number is "+oddSum);