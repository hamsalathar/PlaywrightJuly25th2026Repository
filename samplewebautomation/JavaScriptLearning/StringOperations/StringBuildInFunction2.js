 
 console.log("----------------------------------------------")
 let String1 = "Banglore is Capital of Karnataka";
 console.log(String1.startsWith("Banglore"));
 console.log(String1.endsWith("Karnataka"));
 console.log(String1.includes("of"));
console.log("------------------------------------------------");

let String2 = "Hamsa";
console.log(String2.padStart(15,"%"));

console.log("------------------------------------------------");
let String3 = "Welcome";
console.log(String3.padEnd(9, "@"));
console.log("---------------------------------------------------");

let String4 = "This is my loveable family";
console.log(String4.split(" "));
console.log("---------------------------------------------------")
let String5 = "this my first javascript program";
console.log(String5.repeat(5));
console.log("---------------------------------------------------");
let String6= "This is mt java language and java is very easy language";
console.log(String6.replace("java","javascript"));
console.log("-----------------------------------------------------");
let String7 =  "This is mt java language and java is very easy language";
console.log(String7.replaceAll("java", "javascript"));
console.log("-----------------------------------------------------");
let String8 = "      this is welcoming";
console.log(String8.trimStart());
console.log("------------------------------------------");
let String9 = ("My name is  java      ");
console.log(String9.trimEnd());
console.log("-------------------------------------------------");
let String10 = "      This is my name       "
console.log(String10.trim());
console.log("---------------------------------------------------------")
let String11 = "hamsa";
let String12 = "latha";
console.log(String11.concat(String12));
let String13 = " you";
console.log(String13.concat(" ", "are", " ", "my"," ", "best"," ", "fried"));
console.log("------------------------------------------------");
let String14 = "My name is javascript";
console.log(String14.slice(1,6));
console.log(String14.slice(-6));
console.log(String14.slice(0, -12));
console.log("-------------------------------------------------------");
let String15 = "My name is khan";
console.log(String15.substring(0,7));
console.log("-------------------------------------------------------");
let String16 = "javascript learning";
console.log(String16.charAt(1,11));