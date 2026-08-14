/*
Write a function to display Prime Numbers in between 50 to 100

•  Start a loop from 50 to 100. 
•  Take one number at a time. 
•  Assume the number is prime:
isPrime = true 
•  Start another loop from 2 up to the number - 1. 
•  Check whether the number is divisible by the current loop value. 
•  If number % loopValue == 0, set isPrime = false and break. 
•  After the inner loop, check isPrime. 
•  If isPrime == true, print the number.

*/

//1. Named function

function primeNumber(start, end)
{
   
     for(let i=start; i<=end;i++)
     {
        let isPrime = true;
        for(let j=2;j<i;j++)
        {
            if(i%j==0)
            {
                isPrime = false;
                break;
            }
    
        }
        if(isPrime == true)
        {
            console.log(i);
        }
     }
     
}

primeNumber(50,100);

console.log("-------------------------------------------");
//2. Anonymous Function

  let primeNumber1=function(start,end){


      for(let i=start;i<=end;i++)
      {  
        let  isPrime = true;
          for(let j=2;j<i;j++)
          {
            if(i%j==0){
                 isPrime = false;
                 break;
            }
          }

          if(isPrime == true){
            console.log(i);
          }
      }
  }

  primeNumber1(50,100);

  console.log("---------------------------------------------------")

  //3. Arrow Function

  let primeNumber2 =(start, end) =>{


      for(let i=start;i<=end;i++){

        let isPrime = true;
        for(let j=2;j<i;j++)
        {
            if(i%j==0){
                   isPrime = false;
                   break;
            }
        }
        if(isPrime ==true)
        {
            console.log(i);
        }
      }
  }

  primeNumber2(50,100);