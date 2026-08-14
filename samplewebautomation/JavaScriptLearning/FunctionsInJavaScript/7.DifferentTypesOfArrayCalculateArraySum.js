
/*
Case2: Write a function based on given Integer array, it has to find sum of all Elements
1.declare and pass parameter to the array.
2.declare one variable to store all the sum of the elements of array ex: let sum =0;
3.Read array element one by one and store it in sum.

*/

//1. Named function


function sumOfElements(arr)
{
       let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum = sum +arr[i];
    }
    console.log("Sum of all the elements is " +sum);
}
sumOfElements([10,20,30]);

console.log("----------------------------------------");
//2. Anonymous Function


let sumOfElements1=function(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum = sum+ arr[i];
    }

    console.log("Sum of all elemenst is " +sum);
}
sumOfElements1(new Array(1,1,1,1,1,1,0));


console.log("----------------------------------------");
//3. Arrow Function
 let sumOfElements2=(arr) =>{

       let sum=0;
       for(let i=0;i<arr.length;i++)
       {
        sum= sum+arr[i];
       }

       console.log("Sum of all elemenst is " +sum);
 }

 let newArr =[500,500,500,500]
sumOfElements2(newArr);