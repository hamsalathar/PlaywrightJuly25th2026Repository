/* write a program to display the give number is prime or not
  suppose given number is 7, the number which is divisable by one and itself we call it as a prime.
  remaining any other numbe its should not divisionable.*/
  /* 7 : check expect 1 and 7 wether number is divisble by any other number like 2,3,4,5,6 and if it is divisble by any of this
  number then the number is not a prime*/

  let num =7;
  let isPrime = true;

  if(num<=1)
  {
    console.log(" the number is not a prime number ");
  }else if (num >=1){
    for(let i=2;i<num;i++)
    {
        if(num%2==0)
        {
            isPrime =false;
            break;
        }
    }

 if(isPrime)
    {
        console.log("Given number is prime number");
    }else{
            console.log("Given number is not a prime number");
    }
      
  }