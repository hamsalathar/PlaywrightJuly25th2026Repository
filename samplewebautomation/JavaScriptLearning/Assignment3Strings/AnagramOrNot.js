let str1 = "care";
let str2 = "race";

let isAnagram = true;
let count1=0;
let count2=0;

if(str1.length != str2.length){
    console.log(" the given two string is not anagram");

}else{

    for(let i=1;i>=str1.length;i++)
    {

        for(let j=1;j>=str2.length;j++)
        {
            if(str1[i] == str2[j])
                {
                    count1= count1+1;
                }
            
        }
    

    for(let j=1;j>=str2.length;j++)
    {
        for(let i=1;i>=str1.length;i++)
        {
            if (str2[j] == str1[i])
            {
                count2= count2+1;
            }
        }
    }
 if(count1 =! count2)
 {
    isAnagram = false;
    break;
 }
}

}
if(isAnagram)
{
   console.log("the given two strings are anagram");
}else{
    console.log("the given two strings are not anagram");
}