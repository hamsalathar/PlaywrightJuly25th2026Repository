/*
1. Named function
2. Anonymous Function
3. Arrow Function

The factorial of a number means multiplying that number by every positive number below it.
It is represented by !.
For example:
5 factorial:
5! = 5 × 4 × 3 × 2 × 1
   = 120
*/

//Named function

function findFactorial(num){

    let fact =1;
    for(i=num;i>=1;i--)
    {
        fact = fact*i;
       
    }
    console.log("factorial of " +num  + "  is :" +fact);
}

findFactorial(4);

console.log("----------------------------------------------------");

//Anonymous Function

let findFactorial1=function(num){

    let fact=1;
    for(let i=num;i>=1;i--){
        fact = fact*i;
    }
    console.log("factorial of " +num  + "  is :" +fact);
}
findFactorial1(5);

console.log("----------------------------------------------------");
// /Arrow Function

  let findFactorial2= (num) =>{
    let fact =1;
    for(let i=num;i>=1;i--){
        fact= fact*i;
    }
    console.log("factorial of " +num + " is" +fact);
  }

  findFactorial2(6);