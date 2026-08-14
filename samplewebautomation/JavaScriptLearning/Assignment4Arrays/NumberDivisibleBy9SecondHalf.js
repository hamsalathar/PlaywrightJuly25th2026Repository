/*
2.Programmatically assign numbers 1 to 100 into an array which are divisible by 9 and read second half of the Elements
1.Read the element from 1 to 100.
2.read the element which is divisible by 9
3.declare an empty array.
4.Read all the element in to an array.
5.if length of the array is > array length/2 print the element

*/
let secHalf = [];
let k=0;
for(let i =1;i<=99;i++)
{
    if(i%9==0){
       secHalf[k] = i;
       k=k+1;
    }

    
}

for(let i = parseInt(secHalf.length/2);i<secHalf.length;i++)
{
    console.log(secHalf[i]);
}

//Suppose using inBuild method means we have Math.ceil() use that.

/*let start = Math.ceil(secHalf.length/2);
for(let i=start;i<secHalf.length;i++)
{
    console.log(secHalf[i]);
}*/