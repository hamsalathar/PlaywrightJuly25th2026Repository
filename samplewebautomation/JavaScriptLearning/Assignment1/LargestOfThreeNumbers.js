/* Write a program to verify the largest number among given three numbers*/
let num1=20;
let num2=20;
let num3=20;

if(num1>=num2 && num1>=num3){
    console.log("The largest number is:"+num1)
} else if(num2>= num1 && num2>=num3){
    console.log("The largest number is:"+num2)
} else{
    console.log("The largest number is:"+num3)
}
