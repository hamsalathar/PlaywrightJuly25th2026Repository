
/* Findout number of digits in a given number without using string conversion */

let num = 123456789;
let count=0;
while(num>0){
        num = Math.floor(num/10);
        count = count+1;
}

console.log("The number of digits in the given number is "+count)







//Find out number of digits in a given number
/*let num =1234567890;
let  count =0;
let str = num.toString();
for(let i=0;i<str.length;i++)
    {
        count=count+1;
    } 
    console.log("The number of digits in the given number is: "+count);*/