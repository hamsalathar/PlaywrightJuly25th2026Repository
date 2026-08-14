/*
Assume if we have 100 lines of code there are 4 lines is required use more than one place, instead copy pasting the code, 
we should write a function and we should call it wherever it requires.
A function is a reusable block of code that performs a specific task.
For example
suppose you want to print:
Hello Hamsa
You could write:
console.log("Hello Hamsa");
But if you need to do it 10 times, you would have to repeat the code.
Instead, create a function:


*/

function greet()
{
    console.log("Hell, good morning customer");
}

greet();

console.log("-------------------------------------------------------------");

/*
Now suppose you don't always want to greet Hamsa.
You want greet
“Hello Hamsa”
“Hello Raj”
“Hello John”
You can pass a value to the function.

*/

function greetDaily(name){
    console.log("Hello Good Morning  " +name);
}

greetDaily("Hamsa");
greetDaily("Jiya");
greetDaily("Mahesh");

console.log("-------------------------------------------------------------");

/*
A function can have multiple parameters.

*/

function add(a,b)
{
    console.log(a+b);
}

add(20,30);
console.log("-------------------------------------------------------------");

/*
Return Statement - Suppose you want a function to calculate a value and give the result back.

*/

function sum(c,d){
    return c+d;
}

let result = sum(30,50);
console.log(result);

 
console.log("-------------------------------------------------------------");

/*
Function Without Parameters but With Return

*/
 function getNumber()
 {
    return 100;
 }

 let resultVal= getNumber();
 console.log(resultVal);
console.log("-------------------------------------------------------------");
 /*
Function With Parameters and Return 

 */

function sub(a,b)
{
    return a-b;
}

let subResult = sub(80,23);
console.log(subResult);