

let date = new Date();

let dayValue = date.getDay();
console.log(dayValue);

let monthValue = date.getMonth();
console.log(monthValue);

let yearValue = date.getFullYear();
console.log(yearValue);

let customDate = dayValue + "-" + monthValue + "-" + yearValue;
console.log(customDate);

//Update custom date
if(dayValue <10)
{
     dayValue = "0" +dayValue;
}

if(monthValue <10)
{
    monthValue = "0" + monthValue;
}

let custDate = dayValue + "-" + monthValue + "-" + yearValue;
console.log(custDate);