/*Write a program to display Percentage applied on given income*/

let income =500000;
if(income < 250000){
    console.log("income tax applied is 0 percent");
}else if(income >= 250000 && income <= 500000){
    console.log(" income tax applied is 5%");
} else if(income>500000 && income <=1000000){
    console.log("income tax applied is 10%");
} else if(income>1000000 && income <=2000000){
    console.log("income tax applied is 20%");
}else if(income>2000000 && income <=10000000){
    console.log("income tax applied is 30%");
}else{
    console.log("income tax applied is 50%");
}