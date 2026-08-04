/*Write a program to verify the given character is Vowel*/

let character='q'
 
switch(character){
    case 'a':case 'e':case 'i':case 'o': case 'u':
        console.log(character+ " is a Vowel");
        break
    default:
         console.log(character+ " is not a Vowel");
}
