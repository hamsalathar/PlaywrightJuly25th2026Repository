//at() : it provides element based on index. At() works based on the index.

let flowers = ["lotus", "cosmos","jasmin","sunflower",12,30,"rose"];
console.log(flowers);
console.log(flowers.at(5));
console.log(flowers.at(4));
console.log(flowers.at(3))

console.log("-------------------------------------------------------------------");

//. indexof() : It provides position of Element based on index from left to right
// .it provides the postion of the left from left to right

let books = ["c","c++","vbscript","typescript","java","javascript","typescript"];
console.log(books);
console.log(books.indexOf("typescript"));
console.log(books.indexOf("typescript",4));
console.log("-------------------------------------------------------------------");

//lastIndexOf() : It provides position of element based on index from right to left
let booksOne = ["c","c++","vbscript","typescript","java","javascript","typescript"];
console.log(booksOne);
console.log(booksOne.lastIndexOf("typescript"));
console.log(booksOne.lastIndexOf("typescript",4));

// /. includes : it verifies the existance of element.
//  the return type will be true or false. If the element present it will return true else it return false.

console.log("-------------------------------------------------------------------");

let fruits = [10,"watermelon",20,"banana",30,"apple"];
console.log(fruits);
console.log(fruits.includes("banana"));
console.log(fruits.includes("chicko"));
console.log("-------------------------------------------------------------------");

//slice() : It extract Elements based on start and end position
let fruitsOne = [10,"watermelon",20,"banana",30,"apple"];
console.log(fruitsOne);
console.log(fruitsOne.slice(2,5));

console.log("-------------------------------------------------------------------");
//reverse() : it prints an array in reverse order
let numbers =[10,20,30,40,50,60,70];
console.log(numbers);
console.log(numbers.reverse());

console.log("-------------------------------------------------------------------");
//concat() : It comnies multiple arrays
let car= ["swift","bmw","jazz"];
console.log(car);
let shapes=["circle","triangle",4];
console.log(shapes);
console.log(car.concat(shapes));


console.log("-------------------------------------------------------------------");
//. join : It joins elements based on delimeter(,)

let city=["chennai","banglore","manglore","hubli","mumbai","pune"];
console.log(city);
console.log(city.join("*"));
