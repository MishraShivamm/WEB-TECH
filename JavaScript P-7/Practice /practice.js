// Q1:  Convert a traditional function to an arrow function.

//Normal function
// function sample (){
//     console.log("sample");  
// }
// sample();

//Arrow Function 
// const sample = () ={ };
// sample();

/*
 Use arrow function with map() to double each number in an array.

const arr = [2,4,6,8];
const doubled = arr.map(num=> num*2);
console.log(doubled());
*/


/* Write an arrow function that checks if a string is a palindrome.
const ispallindrome = str =>str.split(' ').reverse(' ').join(' ');
console.log(ispallindrome("reverse"));
*/

const ispallindrome = str =>str === str.split(' ').reverse().join(' ');
console.log(ispallindrome("boom"));