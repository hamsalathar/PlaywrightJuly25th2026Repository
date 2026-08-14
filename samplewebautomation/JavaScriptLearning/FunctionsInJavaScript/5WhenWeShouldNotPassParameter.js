/*
   when we should not pass the parameter, a function has to display current custom date dd-mm-yyyy  format,
    to display current day no need to pass the parameter.we all built in function to dispaly the curren sutom date, this 
    kind function doesnt required to pass the parameter.

    if the function require input for user then required to pass the parameter.

*/

function myDateFormate()
{

    let date = new Date();

    let myDay = date.getDay();
    if(myDay<10)
    {
        myDay = "0" +myDay;
    }

    let myMonth = date.getMonth();
    if(myMonth<10){
        myMonth = "0" +myMonth;
    }

    console.log( myDay + "-" + myMonth + "-" +date.getFullYear());
}

myDateFormate();