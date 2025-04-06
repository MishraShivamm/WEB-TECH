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

