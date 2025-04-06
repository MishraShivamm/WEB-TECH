/* 
Return keyword is used to return some value from a function

input -> function(does some work) -> output
*/

//Create a function that calculate the sum from 1 to n

function getSum(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum = sum + i;
    }
    return sum;
}
console.log(getSum(7));


// Create a function that concatinate all the string in an array.

let str = ['1','2','3','4','5'];

function concat(str){
    let result = "";
    for(let i =0; i<str.length;i++){
        result = result +str[i];
        // result += str[i] (other way of doing it)
    }
    return result;
}
console.log(concat(str));
