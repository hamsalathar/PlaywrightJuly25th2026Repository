// push Method: Add elements in to the array at end.

let fruits = [10, 20,"Orange", "Apple", 30,true];

console.log(fruits);
fruits.push("Mango", 50, false);
console.log(fruits);

console.log("---------------------------------------------------------");

//pop method: : It removes elements at last no need of passing any parameter.

let flowers = ["tulip","cosmos","sunflower","rose","jasmin"];
console.log(flowers);
flowers.pop();
console.log(flowers);

console.log("---------------------------------------------------------");

//unshift : It adds element at start
let cities = ["banglore","hassan","bidar","tumkur"];
console.log(cities);
cities.unshift("california");
console.log(cities);
console.log("---------------------------------------------------------");

//shift(): It removes element at 0th index
let states = ["Karnataka","assam","tamilnadu","andrapredesh","kerala"];
console.log(states);
states.shift();
console.log(states);
console.log("---------------------------------------------------------");
//ToString()  : This function converts an array with string
let books= ["c","python","c++","java","javascript"];
console.log(books);
let booklist=books.toString();
console.log(booklist);
console.log("-----------------------------------------------------");
let booksArray=booklist.split(",");
console.log(booksArray);