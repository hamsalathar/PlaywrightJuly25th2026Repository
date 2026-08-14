
let date = new Date();

let hourValue= date.getHours();
console.log(hourValue);

let minValue = date.getMinutes();
console.log(minValue);

let secondValue = date.getSeconds();
console.log(secondValue);

let timeValue = hourValue + "-" + minValue + "-" + secondValue;
console.log(timeValue);

if(hourValue <10)
{
    hourValue = "0" +hourValue;
}

if(minValue <10)
{
    minValue = "0" +minValue;
}

if(secondValue <10)
{
    secondValue = "0" +secondValue;
}

let timeVal= hourValue + "-" + minValue + "-" + secondValue;
console.log(timeVal);