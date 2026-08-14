/* Write a function for a given array it has to read first half of the Elements.


*/

// With return function
function getFirstHalf(arr)
{  
    let k=0, result=[];
    for(let i=0;i< parseInt(arr.length/2);i++)
    {
          
           result[k]=arr[i];
           k++;
           
    }
    return result;
}

  let newArray = getFirstHalf([10,20,30,40,50,60]);
  console.log(newArray);
  console.log("the half of the element is " +newArray);

console.log("-------------------------------------------------");

  // Without return function

  function showFirstHalf(arr)
  {
     let k=0; result =[];
    for(let i=0;i< parseInt(arr.length/2);i++)
    {
           result[k] = arr[i];
           k++;
    }

    console.log(result);
  }

  showFirstHalf([10,20,30,40,50]);