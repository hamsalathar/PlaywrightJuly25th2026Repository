/*
Combine elements from first array and second array and store into third array and read elements for third array
1.Create array1.
2.Create array2.
3.Create empty array3.
4.Read the element from array1 and store it in array3.
5.read the element from array2 and store it in array3.
*/

let fruits = ["Orange","Apple","Mango"];
let flowers = ["Lotus","cosmos","tulip","Jasmin"];
let fruitsFlower = [];
let k=0;
for(let i=0;i<fruits.length;i++)
{
    fruitsFlower[k] = fruits[i];
    k++;
}

for(let i=0; i<flowers.length;i++)
{
    fruitsFlower[k] = flowers[i];
    k++;
}
console.log(fruitsFlower);