/*
Programmatically assign even numbers 20 to 40 into an array and Read Elements in reverse order
1.Read numbers from 20 to 40.
2.read even numbers from 20 to 40
3.declare an empty
4.assign each element to an array
5.read the array element in reverese order.
*/
let evenNum=[];
let k=0;
for(let i=20;i<=40;i++)
{
     if(i%2==0)
     {
      
        evenNum[k] = i;
        k++;
     }

}

     for(let i=evenNum.length-1;i>=0;i--)
     {
        let revNum =evenNum[i];
        console.log(revNum);
     }

